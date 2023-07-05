---
location: "/telemetry/trace"
title: "telemetry/trace"
---

# trace

```go
import "go.nunchi.studio/helix/telemetry/trace"
```

Package trace gives access to the global OpenTelemetry tracer configured internally.

## Index

- [type Span](<#Span>)
  - [func Start\(ctx context.Context, kind SpanKind, name string\) \(context.Context, \*Span\)](<#Start>)
  - [func \(s \*Span\) AddEvent\(name string\)](<#Span.AddEvent>)
  - [func \(s \*Span\) Context\(\) trace.SpanContext](<#Span.Context>)
  - [func \(s \*Span\) End\(\)](<#Span.End>)
  - [func \(s \*Span\) RecordError\(msg string, err error\)](<#Span.RecordError>)
  - [func \(s \*Span\) SetBoolAttribute\(key string, value bool\)](<#Span.SetBoolAttribute>)
  - [func \(s \*Span\) SetFloatAttribute\(key string, value float64\)](<#Span.SetFloatAttribute>)
  - [func \(s \*Span\) SetIntAttribute\(key string, value int64\)](<#Span.SetIntAttribute>)
  - [func \(s \*Span\) SetSliceStringAttribute\(key string, value \[\]string\)](<#Span.SetSliceStringAttribute>)
  - [func \(s \*Span\) SetStringAttribute\(key string, value string\)](<#Span.SetStringAttribute>)
- [type SpanKind](<#SpanKind>)


## type [Span](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L15-L23>)

Span is the individual component of a Trace. It represents a single named and timed operation of a workflow that is traced. A tracer is used to create a Span and it is then up to the operation the Span represents to properly end the Span when the operation itself ends.

```go
type Span struct {
    // contains filtered or unexported fields
}
```

### func [Start](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/tracer.go#L22>)

```go
func Start(ctx context.Context, kind SpanKind, name string) (context.Context, *Span)
```

Start creates a Span and a context containing the newly\-created Span.

If the context provided contains a Span then the newly\-created Span will be a child of that Span, otherwise it will be a root Span.

Any Span that is created must also be ended. This is the responsibility of the user. Implementations of this API may leak memory or other resources if Spans are not ended.

### func \(\*Span\) [AddEvent](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L114>)

```go
func (s *Span) AddEvent(name string)
```

AddEvent adds an event to the Span with the provided name.

### func \(\*Span\) [Context](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L121>)

```go
func (s *Span) Context() trace.SpanContext
```

Context returns the original OpenTelemetry span's context.

### func \(\*Span\) [End](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L131>)

```go
func (s *Span) End()
```

End sets the appropriate status and completes the Span. The Span is considered complete and ready to be delivered through the rest of the telemetry pipeline after this method is called. Therefore, updates to the Span are not allowed after this method has been called.

### func \(\*Span\) [RecordError](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L104>)

```go
func (s *Span) RecordError(msg string, err error)
```

RecordError will record the error as an exception span event for this Span.

### func \(\*Span\) [SetBoolAttribute](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L83>)

```go
func (s *Span) SetBoolAttribute(key string, value bool)
```

SetBoolAttribute sets a boolean attribute to the span.

### func \(\*Span\) [SetFloatAttribute](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L97>)

```go
func (s *Span) SetFloatAttribute(key string, value float64)
```

SetFloatAttribute sets a float attribute to the span.

### func \(\*Span\) [SetIntAttribute](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L90>)

```go
func (s *Span) SetIntAttribute(key string, value int64)
```

SetIntAttribute sets a integer attribute to the span.

### func \(\*Span\) [SetSliceStringAttribute](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L76>)

```go
func (s *Span) SetSliceStringAttribute(key string, value []string)
```

SetSliceStringAttribute sets a slice of string attributes to the span.

### func \(\*Span\) [SetStringAttribute](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L69>)

```go
func (s *Span) SetStringAttribute(key string, value string)
```

SetStringAttribute sets a string attribute to the span.

## type [SpanKind](<https://github.com/nunchistudio/helix.go/blob/main/telemetry/trace/span.go#L28>)

SpanKind is the role a Span plays in a Trace.

```go
type SpanKind int
```


```go
const SpanKindClient SpanKind = 3
```


```go
const SpanKindConsumer SpanKind = 5
```


```go
const SpanKindInternal SpanKind = 1
```


```go
const SpanKindProducer SpanKind = 4
```


```go
const SpanKindServer SpanKind = 2
```

