---
location: "/integrations/azure/documentation/azure-topic.md"
title: "Azure: Publish messages to Service Bus"

goref:
  - "integrations/azure"
  - "specifications/topic"
---

# {% $markdoc.frontmatter.title %}

## Environment variables

This integration relies on the Azure SDK. Therefore, the following environment
variables are required in the Temporal worker):

```bash
# The Azure Service Bus connection string to connect to.
SERVICEBUS_CONNECTION_STRING=Endpoint=sb://...
```

{% partial file="specifications/integration-topic.md" variables={
    mod: "azure",
    name: "Service Bus",
    config: {
      Topic: "my-topic",
    },
  }
/%} 
