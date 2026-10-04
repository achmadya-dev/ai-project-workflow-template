# Reusable prompts

Name the accepted issue or task when one exists. Do not repeat every repository rule in every prompt.

## Kickoff

Read `AGENTS.md` and the project context. This project is for [users] and should solve [problem]. Propose a narrow first outcome and identify material product/domain decisions. Update `docs/PRODUCT.md`, `docs/DOMAIN.md`, and `docs/ARCHITECTURE.md` only with accepted choices. Create a planning issue or local task. Do not implement yet.

## Plan a change

Read `AGENTS.md`, the relevant project context, code, and tests. Plan [change] with numbered acceptance criteria, boundary and failure examples, risks, compatibility/recovery, and verification. Save the plan as an issue or local task. Do not implement yet.

## Implement

Implement the accepted revision of [issue or task path]. Inspect Git status, use a separate branch, follow project-specific architecture and verification, and record actual evidence and limitations. Prepare a pull request if authorized and available. Do not merge or deploy.

## Review

Review the diff against [task] and the project standards. Prioritize correctness, regressions, safety, domain invariants, and verification gaps. Report evidence and locations; do not change code yet.

## Continue in a new session

Read `AGENTS.md`, `docs/HANDOFF.md`, [task path], Git status, and the branch log. Summarize verified state, then continue only authorized work. Do not overwrite uncommitted changes or treat every handoff claim as verified.

## Investigate a failure

Investigate [failure and sanitized evidence]. Reproduce where safe, identify the cause, and fix it within the accepted scope. Add a regression test when useful. Do not remove or weaken checks to make CI green.
