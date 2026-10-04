# Safety boundaries

## What repository automation does

The included GitHub workflow tests this repository's helper scripts and checks pull-request metadata structure and path-based risk hints. It does not establish application correctness, prove an issue is relevant, grant authorization, or enforce repository protection by itself.

## What is not enforced

Agent instructions, task states, risk labels, PR checkboxes, and local scripts do not restrict credentials or prevent every unsafe action. GitHub rulesets are not enabled merely because workflow files exist. Changes to tests, scripts, and CI still require review.

## Risk levels

- **Low**: narrow documentation or behavior changes without meaningful data, access, or contract impact.
- **Medium**: ordinary feature work with localized impact.
- **High**: access control, sensitive data, money, durable schemas, dependencies, deployment, CI/governance, or irreversible external effects.

The PR path heuristic is a minimum, not a complete risk assessment. High risk means review and recovery planning should match impact; it does not permanently block work. Do not repeatedly ask for approval for reversible work already authorized.

## Credentials and external effects

Use the least privilege needed. Do not put credentials in source, prompts, issues, logs, or test fixtures. Prefer synthetic data and isolated test environments. Never assume a test target is disposable from its name alone.

Do not access production, deploy, publish, send real communications, make payments, delete durable data, or initiate other consequential external effects without explicit authorization and a concrete plan. Code rollback does not undo external effects.

## CI and repository protection

Use minimal CI permissions and do not expose write credentials to untrusted code. Load policy checks from a trusted base revision where practical. Avoid privileged workflows that execute untrusted pull-request code. Configure required checks, branch protection, and review rules in the host platform and verify them independently.
