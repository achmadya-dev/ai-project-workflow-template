# Review procedure

Read the accepted task, actual diff, `docs/CODE_STANDARDS.md`, relevant product/domain/architecture context, tests, and CI results independently.

Review in this order:

1. **Contract**: does the change satisfy accepted behavior without unrelated scope?
2. **Boundaries**: are responsibilities, dependencies, and public interfaces clear in the selected architecture?
3. **Trust and safety**: are untrusted inputs validated, permissions checked before side effects, and secrets/data protected?
4. **Integrity**: are durable state, concurrency, compatibility, and external effects handled correctly where relevant?
5. **Failure behavior**: are expected failures explicit and unexpected failures preserved safely?
6. **Tests**: do tests prove the contract, include important negative cases, and avoid merely mirroring the implementation?
7. **Simplicity**: are dependencies, abstractions, and automation justified by a current need?
8. **Evidence**: did relevant project-specific checks actually run, and are limitations disclosed?

For risky changes, inspect authorization/access, sensitive data, money, deployment, CI/governance, and recovery. Distinguish observed defects from hypotheses. Findings should include impact, severity, and file/location. If no blocking findings exist, state residual risks and unverified assumptions rather than giving a blanket guarantee.

AI review does not substitute for domain ownership, security review when warranted, or required human approval. Do not silently approve or merge your own changes.
