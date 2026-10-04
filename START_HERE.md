# Start here

## 1. Make this project yours

Create a repository from this template and open it in the coding tool you use. Read `AGENTS.md` first. This repository contains workflow guidance only; it does not select or install an application stack.

Before implementation, work with the project owner to fill in:

- `docs/PRODUCT.md`: users, problem, outcomes, and project scope.
- `docs/DOMAIN.md`: shared terms, rules, examples, and unresolved decisions.
- `docs/ARCHITECTURE.md`: actual language, runtime, framework, data, deployment, and verification choices.
- `docs/CODE_STANDARDS.md`: project-specific quality rules in addition to the portable baseline.

Do not decide product, access, data, or operational rules by guessing. Start with one narrow workflow that can be demonstrated.

## 2. Plan before implementation

Ask the agent to read `AGENTS.md` and the relevant context, then propose a narrow plan with observable acceptance criteria, negative cases, risks, verification, compatibility, and recovery. Save it as a GitHub issue or create a local task:

```sh
node scripts/new-task.mjs first-change
```

Review and explicitly accept the plan before implementation. A task file or a CI check is not proof of user authorization.

## 3. Implement and verify

Use a separate branch. Follow the selected stack's documented implementation and verification commands. Test behavior at the cheapest layer that proves the contract, include important failure cases, and record actual commands and outcomes in the task or `docs/VALIDATION.md`.

Do not weaken tests or security controls to get a green result. Do not merge, deploy, publish, or perform real external side effects unless separately authorized.

## 4. Review and hand off

Review the complete diff against the accepted criteria, safety rules, and project-specific standards. Prepare a pull request with `.github/PULL_REQUEST_TEMPLATE.md` when GitHub is available. For a new session, update `docs/HANDOFF.md` with verified state and the next action.

## 5. Configure the repository

See `docs/GITHUB_SETUP.md` for optional issues, pull requests, CI, and branch protection. Configure real owners and required checks for each created repository. The included CI validates workflow scripts and PR metadata; it does not build or test an application.
