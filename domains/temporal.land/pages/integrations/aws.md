---
location: "/integrations/aws/documentation/aws.md"
title: "Amazon Web Services"

goref:
  - "integrations/aws"
---

# {% $markdoc.frontmatter.title %}

Integrating Amazon Web Services (AWS) in your applications is not an easy task,
especially if you wish to ensure durability, scalability, and reliability.

The Temporal Land AWS integration allows to leverage different services from AWS
as fault-tolerant Integrations as a Service.

## Configuration

### Environment variables

This integration relies on the AWS SDK. Therefore, the following environment
variables are required in the Temporal worker:

```bash
# The AWS access key ID to use.
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE

# The AWS secret access key to use.
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

# The AWS region to connect to.
AWS_REGION=us-east-2
```

## Specifications

The AWS integration leverages the following specifications. Please refer to each
guide for details and example.

{% card title="S3 - Bucket" href="/integrations/aws-bucket" %}
  The AWS S3 integration leverages the bucket specification.
{% /card %}

{% card title="DynamoDB - NoSQL" href="/integrations/aws-nosql" %}
  The AWS DynamoDB integration leverages the NoSQL specification.
{% /card %}

{% card title="SNS/SQS - Topic" href="/integrations/aws-topic" %}
  The AWS SNS/SQS integration leverages the topic specification.
{% /card %}
