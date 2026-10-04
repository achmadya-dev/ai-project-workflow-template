import assert from 'node:assert/strict'
import { test } from 'node:test'
import { validatePr } from './check-pr.mjs'

const body = `Closes #12
Risk: low
## Goal
Make the requested outcome clear to project users.
## Changes
Document and implement the accepted behavior.
## Verification
node --test scripts/*.test.mjs passed at commit abc123.
## Compatibility and recovery
No persistent data or external contract changed.
## Documentation
Updated the task record with results and limitations.
`

test('accepts complete low-risk PR metadata for an ordinary project change', () =>
  assert.deepEqual(validatePr(body, ['src/features/example/file.ext']), []))

test('rejects incomplete evidence', () =>
  assert.ok(validatePr(body.replace('passed at commit abc123.', 'TODO'), []).length))

test('rejects a missing issue reference', () =>
  assert.ok(validatePr(body.replace('Closes #12', ''), []).length))

test('requires high risk for repository automation and governance paths', () => {
  for (const file of ['.github/workflows/ci.yml', 'scripts/check-pr.mjs', 'docs/COMMITS.md', '.gitignore']) {
    assert.ok(validatePr(body, [file]).some((error) => error.includes('Sensitive')))
    assert.deepEqual(validatePr(body.replace('Risk: low', 'Risk: high'), [file]), [])
  }
})

test('requires high risk for common sensitive project paths', () => {
  for (const file of ['service/auth/login.ext', 'data/migrations/001.ext', 'config/.env.production']) {
    assert.ok(validatePr(body, [file]).some((error) => error.includes('Sensitive')))
    assert.deepEqual(validatePr(body.replace('Risk: low', 'Risk: high'), [file]), [])
  }
})

test('does not require high risk merely because an application file changed', () =>
  assert.deepEqual(validatePr(body, ['src/features/example/file.ext']), []))
