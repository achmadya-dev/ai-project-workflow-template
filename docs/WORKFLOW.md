# Project workflow

## Sources of truth

Project code and maintained documentation describe current behavior and decisions. Issues capture requests and discussion; pull requests capture a change and its evidence. Use `docs/tasks/TEMPLATE.md` for local planning when the issue tracker is unavailable.

## Task states

`draft` → `ready` → `in-progress` → `in-review` → `done`; use `blocked` when a decision or access prevents progress. A state is a record, not an authorization mechanism. `ready` means the criteria are clear and the project owner has accepted the plan.

## Planning

1. Read product/domain context, architecture decisions, related code, tests, and Git status.
2. Define the outcome, scope, numbered acceptance criteria, risks, steps, verification, compatibility, and recovery.
3. Ask only about material choices; record routine assumptions.
4. Create or update a GitHub issue or a local task. Record plan revision and source of authorization; do not manufacture approval.
5. Update the plan when material scope changes. Earlier authorization does not automatically cover new scope.

## Implementation

1. Keep one task per branch and preserve existing user changes.
2. Implement the smallest coherent change that satisfies accepted criteria.
3. Run project-specific verification from `docs/ARCHITECTURE.md` or its accepted plan; this template does not supply app build/test commands.
4. Update domain, architecture, decision, or runbook documentation when the contract changes.
5. Record actual commands, results, limitations, and revision. Explain failures; do not weaken checks.
6. Follow `docs/COMMITS.md` and keep unrelated work separate.

## Pull requests

1. Inspect the final changed-file list and compare it with accepted scope.
2. Complete `.github/PULL_REQUEST_TEMPLATE.md`, link a real same-repository issue as required by the included check, and classify risk from actual paths and behavior. If work began in a local task, create the issue before opening the PR.
3. The included `pr-contract` check validates structure and risk hints only. A reviewer must verify issue relevance, behavior, and evidence.
4. Sensitive governance, access, data, or operational changes need high-risk review and a suitable recovery plan.
5. Do not merge, enable auto-merge, publish, or deploy merely because CI passes.

## Handoff

Before changing sessions, update `docs/HANDOFF.md` with the task, branch, latest revision, uncommitted files, verified state, blockers, and next action. Do not store secrets or a full chat transcript.

## Definition of done

Acceptance criteria are met and supported by evidence, work stays in scope, relevant checks passed or blockers are explicit, documentation is accurate, and issue/PR links are real. A clean build or metadata check alone is not completion.
