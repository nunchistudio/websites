---
location: "/integration/nats"
title: "nats"
---

# nats

```go
import "go.nunchi.studio/helix/integration/nats"
```

Package nats exposes an opinionated way to interact with NATS JetStream. It comes with a strong association with OpenTelemetry for distributed tracing and automatic error recording.

## Index

- [type Config](<#Config>)
- [type Consumer](<#Consumer>)
- [type JetStream](<#JetStream>)
  - [func Connect\(cfg Config\) \(JetStream, error\)](<#Connect>)
- [type KeyValue](<#KeyValue>)
- [type MessagesContext](<#MessagesContext>)
- [type MsgHandler](<#MsgHandler>)
- [type Stream](<#Stream>)


## type [Config](<https://github.com/nunchistudio/helix.go/blob/main/integration/nats/config.go#L11-L25>)

Config is used to configure the NATS integration.

```go
type Config struct {

    // Addresses are NATS addresses to connect to. A URL can contain username and
    // password, such as:
    //
    //   "nats://derek:pass@localhost:4222"
    //
    // Default:
    //
    //   []string{"nats://localhost:4222"}
    Addresses []string `json:"addresses"`

    // TLSConfig configures TLS to communicate with the NATS server.
    TLS integration.ConfigTLS `json:"tls"`
}
```

## type [Consumer](<https://github.com/nunchistudio/helix.go/blob/main/integration/nats/jetstream_consumer.go#L33-L39>)

Consumer exposes an opinionated way to interact with NATS JetStream consumer capabilities.

```go
type Consumer interface {
    Fetch(ctx context.Context, batch int, opts ...jetstream.FetchOpt) (jetstream.MessageBatch, error)
    FetchBytes(ctx context.Context, maxBytes int, opts ...jetstream.FetchOpt) (jetstream.MessageBatch, error)
    FetchNoWait(ctx context.Context, batch int) (jetstream.MessageBatch, error)
    Consume(ctx context.Context, handler MsgHandler, opts ...jetstream.PullConsumeOpt) (jetstream.ConsumeContext, error)
    Messages(ctx context.Context, opts ...jetstream.PullMessagesOpt) (MessagesContext, error)
}
```

## type [JetStream](<https://github.com/nunchistudio/helix.go/blob/main/integration/nats/jetstream.go#L18-L37>)

JetStream exposes an opinionated way to interact with NATS JetStream.

```go
type JetStream interface {
    Publish(ctx context.Context, msg *nats.Msg, opts ...jetstream.PublishOpt) (*jetstream.PubAck, error)
    PublishAsync(ctx context.Context, msg *nats.Msg, opts ...jetstream.PublishOpt) (jetstream.PubAckFuture, error)
    PublishAsyncPending(ctx context.Context) int
    PublishAsyncComplete(ctx context.Context) <-chan struct{}

    Stream(ctx context.Context, streamname string) (Stream, error)
    CreateStream(ctx context.Context, config jetstream.StreamConfig) (Stream, error)
    UpdateStream(ctx context.Context, config jetstream.StreamConfig) (Stream, error)
    DeleteStream(ctx context.Context, streamname string) error

    Consumer(ctx context.Context, streamname string, consumername string) (Consumer, error)
    CreateOrUpdateConsumer(ctx context.Context, streamname string, config jetstream.ConsumerConfig) (Consumer, error)
    OrderedConsumer(ctx context.Context, streamname string, config jetstream.OrderedConsumerConfig) (Consumer, error)
    DeleteConsumer(ctx context.Context, streamname string, consumername string) error

    KeyValue(ctx context.Context, bucket string) (KeyValue, error)
    CreateKeyValue(ctx context.Context, config jetstream.KeyValueConfig) (KeyValue, error)
    DeleteKeyValue(ctx context.Context, bucket string) error
}
```

### func [Connect](<https://github.com/nunchistudio/helix.go/blob/main/integration/nats/nats.go#L35>)

```go
func Connect(cfg Config) (JetStream, error)
```

Connect tries to connect to the NATS server given the Config. Returns an error if Config is not valid or if the connection failed.

## type [KeyValue](<https://github.com/nunchistudio/helix.go/blob/main/integration/nats/jetstream_keyvalue.go#L27-L42>)

KeyValue exposes an opinionated way to interact with a NATS JetStream key\-value store. All functions are wrapped with a context because some of them automatically do distributed tracing \(by using the said context\) as well as error recording within traces.

```go
type KeyValue interface {
    Bucket(ctx context.Context) string
    Get(ctx context.Context, key string) (jetstream.KeyValueEntry, error)
    GetRevision(ctx context.Context, key string, revision uint64) (jetstream.KeyValueEntry, error)
    Create(ctx context.Context, key string, value []byte) (uint64, error)
    Put(ctx context.Context, key string, value []byte) (uint64, error)
    Update(ctx context.Context, key string, value []byte, revision uint64) (uint64, error)
    Delete(ctx context.Context, key string, opts ...jetstream.KVDeleteOpt) error
    Purge(ctx context.Context, key string, opts ...jetstream.KVDeleteOpt) error
    PurgeDeletes(ctx context.Context, opts ...jetstream.KVPurgeOpt) error
    Watch(ctx context.Context, keys string, opts ...jetstream.WatchOpt) (jetstream.KeyWatcher, error)
    WatchAll(ctx context.Context, opts ...jetstream.WatchOpt) (jetstream.KeyWatcher, error)
    Keys(ctx context.Context, opts ...jetstream.WatchOpt) ([]string, error)
    History(ctx context.Context, key string, opts ...jetstream.WatchOpt) ([]jetstream.KeyValueEntry, error)
    Status(ctx context.Context) (jetstream.KeyValueStatus, error)
}
```

## type [MessagesContext](<https://github.com/nunchistudio/helix.go/blob/main/integration/nats/jetstream_messages.go#L26-L29>)

MessagesContext exposes an opinionated way to interact with a NATS JetStream messages' iterator.

```go
type MessagesContext interface {
    Next(ctx context.Context) (context.Context, jetstream.Msg, error)
    Stop(ctx context.Context)
}
```

## type [MsgHandler](<https://github.com/nunchistudio/helix.go/blob/main/integration/nats/jetstream_consumer.go#L18>)

MsgHandler is like jetstream.MessageHandler but allows to pass a context for leveraging automatic and distributed tracing with OpenTelemetry.

```go
type MsgHandler func(ctx context.Context, msg jetstream.Msg)
```

## type [Stream](<https://github.com/nunchistudio/helix.go/blob/main/integration/nats/jetstream_stream.go#L25-L35>)

Stream exposes an opinionated way to interact with NATS JetStream stream management capabilities.

```go
type Stream interface {
    CreateOrUpdateConsumer(ctx context.Context, config jetstream.ConsumerConfig) (Consumer, error)
    OrderedConsumer(ctx context.Context, config jetstream.OrderedConsumerConfig) (Consumer, error)
    Consumer(ctx context.Context, consumername string) (Consumer, error)
    DeleteConsumer(ctx context.Context, consumername string) error
    Purge(ctx context.Context, opts ...jetstream.StreamPurgeOpt) error
    GetMsg(ctx context.Context, seq uint64, opts ...jetstream.GetMsgOpt) (*jetstream.RawStreamMsg, error)
    GetLastMsgForSubject(ctx context.Context, subject string) (*jetstream.RawStreamMsg, error)
    DeleteMsg(ctx context.Context, seq uint64) error
    SecureDeleteMsg(ctx context.Context, seq uint64) error
}
```

