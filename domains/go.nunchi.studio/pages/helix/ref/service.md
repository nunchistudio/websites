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


## func [Attach](<https://github.com/nunchistudio/helix.go/blob/main/service/integration.go#L14>)

```go
func Attach(inte integration.Integration) error
```

Attach allows to attach a third\-party integration to a service. When attached, the Init and Close methods of the integration are automatically called when the service is initializing and stopping, so they shouldn't be called manually by the clients.

## func [Close](<https://github.com/nunchistudio/helix.go/blob/main/service/service.go#L112>)

```go
func Close() error
```

Close tries to gracefully close connections with all integrations. It then tries to drain/close the tracer and logger.

## func [Start](<https://github.com/nunchistudio/helix.go/blob/main/service/service.go#L50>)

```go
func Start() error
```

Start initializes the helix service, and starts each integration attached by executing their Start function. This returns as soon as an interrupting signal is catched or when an integration returns an error while starting it.

