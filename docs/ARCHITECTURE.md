# Architecture and technology decisions

## Status

Not configured. This template does not select an application stack or system architecture.

## Project choices

Document chosen options and reasons when the project owner accepts them. Mark undecided items rather than treating examples as defaults.

- Languages and runtimes:
- Frameworks and major libraries:
- System shape and module boundaries:
- Data stores and ownership:
- External services and trust boundaries:
- Deployment and operational model:
- Testing and verification tools:
- CI and release process:
- Supported platforms and compatibility constraints:

## Boundaries to define

For this project's actual shape, describe where untrusted input is validated, where policy is enforced, where side effects happen, how failures are represented, and which module owns each durable rule. Keep dependencies understandable and avoid layers without a concrete reason.

## Decision records

Use `docs/adr/0000-template.md` for consequential choices, alternatives, compatibility effects, and decisions that are expensive to reverse. Update this document when accepted decisions change the project baseline.
