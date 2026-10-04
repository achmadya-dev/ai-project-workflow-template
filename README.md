# AI Project Workflow Template

A stack-agnostic starting point for planning, implementing, reviewing, and handing off work with AI coding tools. It contains repository guidance, reusable Markdown templates, small workflow scripts, and optional GitHub automation. It does not prescribe an application language, framework, runtime, database, or deployment platform.

**Start with [START_HERE.md](START_HERE.md).**

## What is included

- `AGENTS.md`: portable instructions for coding agents.
- `docs/`: product/domain prompts, architecture and quality contracts, plan/implement/review procedures, safety guidance, templates, and evidence records.
- `scripts/`: dependency-free Node.js helpers for setup checks, local task creation, and GitHub pull-request metadata validation.
- `.github/`: Markdown issue/PR templates and a small workflow that tests these helpers and validates PR metadata.

There is no application source, package manifest, application dependency, build command, or assumed test framework. The GitHub workflow uses Node.js only to run this repository's workflow scripts; projects created from this template choose their own stack and verification commands.

## Local workflow tools

Requirements: Git and Node.js 20 or newer for the helper scripts. GitHub CLI (`gh`) is optional and only needed for issue/PR actions.

```sh
node scripts/doctor.mjs
node scripts/new-task.mjs first-change
node --test scripts/*.test.mjs
```

`new-task.mjs` creates `docs/tasks/<slug>.md` without overwriting an existing task. The PR metadata validator runs automatically in GitHub Actions for pull requests; it checks formatting and risk hints, not whether the linked issue is real or whether the change is correct.

## Workflow at a glance

1. Read `AGENTS.md` and fill in `docs/PRODUCT.md`, `docs/DOMAIN.md`, and `docs/ARCHITECTURE.md` for the new project.
2. Plan one narrow outcome in a GitHub issue or a local task created from `docs/tasks/TEMPLATE.md`.
3. Record acceptance criteria, constraints, risk, authorization, and how each criterion will be verified.
4. Implement on a separate branch using the project's chosen stack and its documented checks.
5. Review the actual diff against the accepted task; record commands, results, and limitations.
6. Prepare a pull request using `.github/PULL_REQUEST_TEMPLATE.md` and link a real same-repository issue as required by the included PR check. Do not merge or deploy solely because checks pass.

If GitHub is unavailable, keep the task and evidence locally. Never claim an issue, review, or pull request exists until it has actually been created.

## Before using this template

Choose and document the project's language, runtime, framework, persistence, deployment, and verification tools in `docs/ARCHITECTURE.md`. Replace example guidance with real project decisions; this template deliberately does not supply application code or default technology choices. Configure GitHub rulesets and required checks separately—files in a repository cannot enable those controls by themselves.
