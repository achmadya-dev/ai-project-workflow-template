# Code and change standards

This is the portable quality contract. Add project-specific rules after selecting a stack; do not copy rules for technologies the project does not use.

## Priority

1. Accepted product/domain criteria and safety constraints.
2. Security, privacy, and data integrity.
3. The project's documented architecture and public contracts.
4. Correctness, testability, and operability.
5. Simplicity and readability.

## Design and implementation

- Keep responsibilities and dependency direction explicit. Put policy close to the concept that owns it and side effects at clear boundaries.
- Prefer deterministic, testable logic where practical. Do not introduce generic layers, dependencies, caches, queues, or automation without a concrete current need.
- Keep public interfaces small and intentional. Handle expected failures explicitly; preserve unexpected failures for the project's established error boundary.
- Follow the language, framework, formatting, and accessibility conventions documented by the project. Do not assume conventions from this template apply to every stack.
- Comments should explain non-obvious decisions and invariants, not repeat the implementation.

## Trust, security, and data

- Treat external input, environment/configuration, stored legacy data, and service responses as untrusted until validated or safely constrained.
- Enforce authorization and policy before protected side effects. Never trust a caller's identity, ownership, role, price, permission, or scope claim without the project's trusted source.
- Protect secrets and personal/customer data. Do not commit credentials or include sensitive values in issues, prompts, logs, examples, or test fixtures.
- Use synthetic test data. Minimize collection, exposure, retention, and logging of sensitive information.
- Document compatibility, recovery, and non-reversible effects for changes to durable data or external contracts. A code rollback does not undo external side effects.

## Tests and verification

- Map each acceptance criterion to an automated test or explicit manual observation.
- Test behavior at the lowest-cost layer that proves the contract, including important boundary and negative cases.
- A regression fix should include a test that would have caught the issue when practical.
- Do not weaken, skip, delete, or broaden tests or security checks just to get a green result. Explain intentional contract changes.
- Run the commands defined by this project's architecture and record exact commands, results, revision, and limitations. Never claim an unrun check passed.

## Dependencies and operational changes

- Before adding a dependency or service, explain why existing project/platform capabilities are insufficient and review maintenance, security, licensing, and operational costs.
- Changes to authentication, authorization, sensitive data, money, durable schemas, deployment, CI, repository governance, or external side effects require high-risk review and a recovery plan appropriate to the impact.
- Do not make production access, deployment, publication, or destructive recovery part of routine implementation authorization.

## Required self-review

Before reporting implementation complete, review the complete diff and confirm:

- scope matches the accepted criteria and unrelated changes are absent;
- architecture and trust boundaries remain clear;
- important input, permission, and failure cases are covered;
- tests prove behavior without weakening existing checks;
- compatibility, recovery, and external effects are disclosed;
- documentation and decision records match the resulting behavior;
- relevant verification actually ran, with blockers and limitations recorded;
- any intentional exception to these standards is explicitly explained.
