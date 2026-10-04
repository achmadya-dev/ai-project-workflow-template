# Workflow patterns

These are portable shapes, not required architecture or code structures. Adapt them to the selected project stack.

## Plan to evidence

```text
user outcome
  -> accepted plan and observable criteria
  -> smallest complete change
  -> behavior-focused verification
  -> diff review
  -> evidence and handoff
```

Keep the task record linked to its source of truth. Do not duplicate fast-changing details across an issue, PR, and documents without a reason.

## Vertical slice

Prefer a small end-to-end slice when that gives the user an observable outcome. Define boundaries from the project's actual architecture; do not create every possible layer up front.

## Test selection

Choose the cheapest check that can establish the behavior: pure logic at a unit boundary, integrations against the real boundary when contracts depend on them, and user-flow checks for critical end-to-end behavior. A mock cannot establish guarantees owned by a real external system.

## Review

Review the diff independently against acceptance criteria, security, domain rules, failure behavior, tests, and compatibility. Distinguish observed defects from hypotheses and include evidence and locations.

## Avoid by default

- A generic service/helper layer without a concrete responsibility.
- Duplicating validation or business rules in multiple layers as competing sources of truth.
- A test that merely repeats the implementation algorithm.
- A CI check that claims to verify application behavior when it only verifies repository tooling.
