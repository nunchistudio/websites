---
location: "/integrations/sqldriver/documentation/sqldriver.md"
title: "SQL driver"

goref:
  - "integrations/sqldriver"
---

# {% $markdoc.frontmatter.title %}

Integrating SQL databases in your applications can sometimes be tedious,
especially if you wish to ensure durability, scalability, and reliability.

The Temporal Land SQL integration allows to leverage any Go SQL driver as a
fault-tolerant Integration as a Service. This includes but not limted to:
- AWS Redshift
- ClickHouse
- CockroachDB
- Couchbase N1QL
- Google BigQuery
- MySQL
- PostgreSQL
- SingleStore
- Snowflake
- TiDB
- Vertica
- *etc.*

## Specifications

The SQL driver integration leverages the following specifications. Please refer
to each guide for details and example.

{% card title="SQL-like" href="/integrations/sqldriver-sqlike" %}
  The SQL driver integration leverages the SQL-like specification.
{% /card %}
