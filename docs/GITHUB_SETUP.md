# GitHub setup

This repository includes optional issue and pull-request templates plus GitHub Actions that check the workflow scripts and PR metadata. The status checks are named `quality` and `pr-contract`; they do not build or test an application created from this template.

## Create a project repository

Create a repository from this template using the GitHub UI or CLI:

```sh
gh repo create OWNER/PROJECT_NAME --private --template TEMPLATE_OWNER/TEMPLATE_REPO --clone
```

Replace the owner and repository names first. If the project directory already has Git history or a remote, inspect `git status` and `git remote -v` before adding anything. Never commit credentials or generated build output.

## Configure protection

1. Enable Issues and Actions if the project uses them.
2. Run the workflow on the default branch and open a test pull request to create its `quality` and `pr-contract` status checks.
3. Configure a ruleset for the actual default branch. Require pull requests and the relevant checks; block force pushes and deletion where appropriate.
4. Configure real owners/reviewers. Do not copy placeholder identities or give agents ruleset bypass access.
5. Keep auto-merge and deployment disabled until explicitly designed and reviewed.
6. Verify protection in GitHub settings; repository files alone do not prove it is active.

If a plan does not support a desired control, document the limitation and use a deliberate manual gate rather than claiming equivalent protection.

## Issues and pull requests

Create a local task if GitHub is unavailable:

```sh
node scripts/new-task.mjs first-change
```

When GitHub is available, complete the task first, create an issue from the planning template, then link the real issue in the PR body. The included PR contract requires that reference. It validates the `Closes #123` format; it does not prove the issue exists or is correct. If a project intentionally does not use issues, change the check and its documented policy deliberately rather than bypassing it.

Use `.github/PULL_REQUEST_TEMPLATE.md` and complete all sections with real evidence. `quality` checks this repository's helper scripts; project owners must add the selected application's own format, lint, test, build, security, and deployment checks as appropriate.

## Tool adapters

`AGENTS.md` is the canonical portable guidance. `CLAUDE.md` and `.github/copilot-instructions.md` are small optional adapters that point back to it. Other coding tools may need their own thin adapter, but should not duplicate the canonical rules.
