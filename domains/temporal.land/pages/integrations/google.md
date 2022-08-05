---
location: "/integrations/google/documentation/google.md"
title: "Google Cloud"

goref:
  - "integrations/google"
---

# {% $markdoc.frontmatter.title %}

Integrating Google Cloud in your applications is not an easy task, especially if
you wish to ensure durability, scalability, and reliability.

The Temporal Land Google Cloud integration allows to leverage different services
from Google Cloud as fault-tolerant Integrations as a Service.

## Configuration

### Environment variables

This integration relies on the Google Cloud SDK. Therefore, the following
environment variables are required in the Temporal worker:

```bash
# The path to the JSON file containing the Google account key.
GOOGLE_APPLICATION_CREDENTIALS=/home/user/service-account-file.json
```

## Specifications

The Google Cloud integration leverages the following specifications. Please refer
to each guide for details and example.

{% card title="Cloud Storage - Bucket" href="/integrations/google-bucket" %}
  The Google Cloud Storage integration leverages the bucket specification.
{% /card %}

{% card title="Firestore - NoSQL" href="/integrations/google-nosql" %}
  The Google Firestore integration leverages the NoSQL specification.
{% /card %}

{% card title="Pub/Sub - Topic" href="/integrations/google-topic" %}
  The Google Pub/Sub integration leverages the topic specification.
{% /card %}
