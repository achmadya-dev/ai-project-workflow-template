import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const sensitivePath = (file) => {
  const governancePath = /^(?:\.github\/|scripts\/|\.gitignore$|AGENTS\.md$|CLAUDE\.md$)/i
  const policyDocument =
    /^docs\/(?:ARCHITECTURE|CODE_STANDARDS|COMMITS|PATTERNS|SAFETY|WORKFLOW|GITHUB_SETUP)\.md$/i
  const workflowProcedure = /^docs\/workflows\//i
  const sensitiveArea =
    /(?:^|\/)(?:auth(?:entication|orization)?|permissions?|payments?|billing|tenants?|migrations?|infrastructure|deployment|security)(?:\/|\.|$)/i
  const privateConfig = /(?:^|\/)\.(?:env|secrets?)(?:\.|$)/i

  return (
    governancePath.test(file) ||
    policyDocument.test(file) ||
    workflowProcedure.test(file) ||
    sensitiveArea.test(file) ||
    privateConfig.test(file)
  )
}

export function validatePr(body, files) {
  const errors = []
  if (!/^Closes #\d+\s*$/m.test(body))
    errors.push('Link a real same-repository issue on a line: Closes #123')
  const risk = body.match(/^Risk: (low|medium|high)\s*$/m)?.[1]
  if (!risk) errors.push('Set Risk: low, medium, or high')
  const critical = files.some(sensitivePath)
  if (critical && risk !== 'high')
    errors.push('Sensitive paths changed; declare Risk: high and obtain the required review')

  for (const heading of [
    'Goal',
    'Changes',
    'Verification',
    'Compatibility and recovery',
    'Documentation',
  ]) {
    const marker = `## ${heading}`
    const lines = body.split('\n')
    const start = lines.findIndex((line) => line.trim() === marker)
    const rest = start >= 0 ? lines.slice(start + 1) : []
    const end = rest.findIndex((line) => line.startsWith('## '))
    const section = (end >= 0 ? rest.slice(0, end) : rest).join('\n').trim()
    if (!section || section.length < 12 || /TODO|REPLACE_ME|Not executed yet/i.test(section))
      errors.push(`Complete section: ${heading}`)
  }
  return errors
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const eventPath = process.env.GITHUB_EVENT_PATH
  if (!eventPath)
    throw new Error('GITHUB_EVENT_PATH is required; run this script from a pull_request workflow')
  const event = JSON.parse(readFileSync(eventPath, 'utf8'))
  const pr = event.pull_request
  if (!pr) throw new Error('A pull_request event is required')
  const files = execFileSync(
    'git',
    ['diff', '--name-only', '-z', `${pr.base.sha}...${pr.head.sha}`],
    { encoding: 'utf8' },
  )
    .split('\0')
    .filter(Boolean)
  const errors = validatePr(pr.body ?? '', files)
  if (errors.length) {
    for (const error of errors) console.error(error)
    process.exit(1)
  }
  console.log(
    'PR metadata passed. This checks structure and risk hints, not business correctness, issue relevance, or human approval.',
  )
}
