---
location: "/telemetry/log"
title: "telemetry/log"
---

# log

```go
import "go.nunchi.studio/helix/telemetry/log"
```

Package log gives access to the global OpenTelemetry logger configured internally.

## Index

- [func Debug\(ctx context.Context, msg string\)](<#Debug>)
- [func Error\(ctx context.Context, msg string\)](<#Error>)
- [func Fatal\(ctx context.Context, msg string\)](<#Fatal>)
- [func Info\(ctx context.Context, msg string\)](<#Info>)
- [func Warn\(ctx context.Context, msg string\)](<#Warn>)


## func Debug

```go
func Debug(ctx context.Context, msg string)
```

Debug logs a message at the debug level. It tries to extract a trace from the context to add "trace\_id" and "span\_id" fields to the log.

## func Error

```go
func Error(ctx context.Context, msg string)
```

Error logs a message at the error level. It tries to extract a trace from the context to add "trace\_id" and "span\_id" fields to the log.

## func Fatal

```go
func Fatal(ctx context.Context, msg string)
```

Fatal logs a message at the fatal level. It tries to extract a trace from the context to add "trace\_id" and "span\_id" fields to the log.

The logger then calls os.Exit\(1\).

## func Info

```go
func Info(ctx context.Context, msg string)
```

Info logs a message at the info level. It tries to extract a trace from the context to add "trace\_id" and "span\_id" fields to the log.

## func Warn

```go
func Warn(ctx context.Context, msg string)
```

Warn logs a message at the warn level. It tries to extract a trace from the context to add "trace\_id" and "span\_id" fields to the log.

