# Implementation procedure

1. Read the accepted task, `AGENTS.md`, `docs/CODE_STANDARDS.md`, affected product/domain context, and architecture decisions.
2. Inspect Git status, preserve unrelated changes, and work on the task branch.
3. Implement the smallest complete change that satisfies the acceptance criteria; keep responsibilities aligned with the selected architecture.
4. Validate untrusted input and enforce policy at the appropriate boundaries before side effects.
5. Add tests at the cheapest layer that proves the behavior, including meaningful failure and boundary cases.
6. Run project-specific verification and record actual outcomes, revision, and limitations.
7. Review the full diff against `docs/CODE_STANDARDS.md`; fix violations or document intentional exceptions.
8. Update relevant domain, architecture, decision, runbook, task, and handoff records.
9. Prepare a pull request with the repository template when authorized and available. Do not merge or deploy without explicit authorization.

The template's own scripts can be checked with `node --test scripts/*.test.mjs`. That does not verify an application created from the template.
