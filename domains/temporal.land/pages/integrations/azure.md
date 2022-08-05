---
location: "/integrations/azure/documentation/azure.md"
title: "Microsoft Azure"

goref:
  - "integrations/azure"
---

# {% $markdoc.frontmatter.title %}

Integrating Microsoft Azure in your applications is not an easy task, especially
if you wish to ensure durability, scalability, and reliability.

The Temporal Land Azure integration allows to leverage different services from
Azure as fault-tolerant Integrations as a Service.

## Configuration

### Environment variables

This integration doesn't require environment variables directly. However, the
specifications leveraged do. Please refer to each specification guides for details
and example.

## Specifications

The Azure integration leverages the following specifications. Please refer to each
guide for details and example.

{% card title="Blob Storage - Bucket" href="/integrations/azure-bucket" %}
  The Azure Blob Storage integration leverages the bucket specification.
{% /card %}

{% card title="CosmosDB - NoSQL" href="/integrations/azure-nosql" %}
  The Azure CosmosDB integration leverages the NoSQL specification.
{% /card %}

{% card title="Service Bus - Topic" href="/integrations/azure-topic" %}
  The Azure Service Bus integration leverages the topic specification.
{% /card %}
