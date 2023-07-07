---
location: "/service"
title: "service"
---

# service

```go
import "go.nunchi.studio/helix/service"
```

Package service allows to manage a service, as well as managing integrations' lifecycle attached to the service.

## Index

- [func Attach\(inte integration.Integration\) error](<#Attach>)
- [func Close\(\) error](<#Close>)
- [func Start\(\) error](<#Start>)
- [func Status\(ctx context.Context\) \(int, error\)](<#Status>)


## func [Attach](<https://github.com/nunchistudio/helix.go/blob/main/service/integration.go#L17>)

```go
func Attach(inte integration.Integration) error
```

Attach allows to attach a third\-party integration to a service. When attached, the Init and Close methods of the integration are automatically called when the service is initializing and stopping, so they shouldn't be called manually by the clients.

## func [Close](<https://github.com/nunchistudio/helix.go/blob/main/service/service.go#L113>)

```go
func Close() error
```

Close tries to gracefully close connections with all integrations. It then tries to drain/close the tracer and logger.

## func [Start](<https://github.com/nunchistudio/helix.go/blob/main/service/service.go#L51>)

```go
func Start() error
```

Start initializes the helix service, and starts each integration attached by executing their Start function. This returns as soon as an interrupting signal is catched or when an integration returns an error while starting it.

## func [Status](<https://github.com/nunchistudio/helix.go/blob/main/service/integration.go#L65>)

```go
func Status(ctx context.Context) (int, error)
```

Status executes a health check of each integration attached to the service, and returns the highest HTTP status code returned. This means if all integrations are healthy \(status \`200\`\) but one is temporarily unavailable \(status \`503\`\), the status returned would be \`503\`.

