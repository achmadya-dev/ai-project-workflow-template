# Recovery planning

Before a consequential change, record the responsible owner, what state can change, how to detect partial completion, and which actions are reversible. Test recovery with safe synthetic or isolated data where practical.

## Rollback and compatibility

Keep a known-good release or artifact when the project has deployable outputs. Consider whether old and new versions can coexist during rollout. A source-control revert does not reverse durable data changes or external effects.

## Durable data

Plan backup, restore, migration, retention, and reconciliation steps for the actual storage system. Prefer additive compatible transitions where feasible. Do not edit already-applied migration history or run destructive recovery against an unknown target.

## External effects

Messages, payments, publishing, automation, and third-party commands may require compensating actions or reconciliation rather than rollback. Design ownership, idempotency, audit, and failure handling before enabling real effects.

## Operational readiness

Before first production use, document service ownership, access, deployment, backup and restore evidence, incident contacts, recovery objectives, and operational checks. This template does not provision any of them.
