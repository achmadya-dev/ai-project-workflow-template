import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
let failed = false

const nodeMajor = Number(process.versions.node.split('.')[0])
if (nodeMajor >= 20) {
  console.log(`OK Node.js ${process.versions.node} (workflow tooling runtime)`)
} else {
  console.error(`SETUP Node.js 20 or newer is required for workflow scripts; found ${process.versions.node}`)
  failed = true
}

for (const file of [
  'AGENTS.md',
  'README.md',
  'docs/ARCHITECTURE.md',
  'docs/CODE_STANDARDS.md',
  'docs/WORKFLOW.md',
  '.github/PULL_REQUEST_TEMPLATE.md',
]) {
  if (existsSync(path.join(root, file))) console.log(`OK ${file}`)
  else {
    console.error(`MISSING ${file}`)
    failed = true
  }
}

try {
  execFileSync('git', ['rev-parse', '--is-inside-work-tree'], { cwd: root, stdio: 'ignore' })
  console.log('OK Git worktree')
} catch {
  console.error('SETUP Git worktree not detected')
  failed = true
}

try {
  execFileSync('gh', ['auth', 'status'], { cwd: root, stdio: 'ignore' })
  console.log('OK GitHub CLI authenticated')
} catch {
  console.log('OPTIONAL GitHub CLI not authenticated; use local task documents when needed')
}

try {
  const defaultBranch = execFileSync(
    'git',
    ['symbolic-ref', '--short', 'refs/remotes/origin/HEAD'],
    { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
  ).trim()
  console.log(`INFO remote default branch is ${defaultBranch}`)
} catch {
  console.log('INFO remote default branch is not configured locally')
}

console.log('INFO choose and document application-specific tools and checks in docs/ARCHITECTURE.md')
console.log('INFO GitHub rulesets and required checks must be enabled and verified in repository settings')

if (failed) process.exitCode = 1
