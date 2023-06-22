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
- [type JetStream](<#JetStream>)
  - [func Connect\(cfg Config\) \(JetStream, error\)](<#Connect>)
- [type KeyValue](<#KeyValue>)
- [type MsgHandler](<#MsgHandler>)


## type Config

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

## type JetStream

JetStream exposes an opinionated way to interact with NATS JetStream. All functions are wrapped with a context because some of them automatically do distributed tracing \(by using the said context\) as well as error recording within traces.

Interfaces wrapped:

- nats.JetStream
- nats.JetStreamManager
- nats.KeyValue
- nats.KeyValueManager

```go
type JetStream interface {
    Publish(ctx context.Context, msg *nats.Msg, opts ...nats.PubOpt) (*nats.PubAck, error)
    PublishAsync(ctx context.Context, msg *nats.Msg, opts ...nats.PubOpt) (nats.PubAckFuture, error)
    PublishAsyncPending(ctx context.Context) int
    PublishAsyncComplete(ctx context.Context) <-chan struct{}
    Subscribe(ctx context.Context, subject string, cb MsgHandler, opts ...nats.SubOpt) (*nats.Subscription, error)
    SubscribeSync(ctx context.Context, subject string, opts ...nats.SubOpt) (*nats.Subscription, error)
    ChanSubscribe(ctx context.Context, subject string, ch chan *nats.Msg, opts ...nats.SubOpt) (*nats.Subscription, error)
    ChanQueueSubscribe(ctx context.Context, subject string, queue string, ch chan *nats.Msg, opts ...nats.SubOpt) (*nats.Subscription, error)
    QueueSubscribe(ctx context.Context, subject string, queue string, cb MsgHandler, opts ...nats.SubOpt) (*nats.Subscription, error)
    QueueSubscribeSync(ctx context.Context, subject string, queue string, opts ...nats.SubOpt) (*nats.Subscription, error)
    PullSubscribe(ctx context.Context, subject string, durable string, opts ...nats.SubOpt) (*nats.Subscription, error)

    AddStream(ctx context.Context, cfg *nats.StreamConfig, opts ...nats.JSOpt) (*nats.StreamInfo, error)
    UpdateStream(ctx context.Context, cfg *nats.StreamConfig, opts ...nats.JSOpt) (*nats.StreamInfo, error)
    DeleteStream(ctx context.Context, stream string, opts ...nats.JSOpt) error
    StreamInfo(ctx context.Context, stream string, opts ...nats.JSOpt) (*nats.StreamInfo, error)
    PurgeStream(ctx context.Context, stream string, opts ...nats.JSOpt) error
    Streams(ctx context.Context, opts ...nats.JSOpt) <-chan *nats.StreamInfo
    StreamNames(ctx context.Context, opts ...nats.JSOpt) <-chan string
    GetMsg(ctx context.Context, stream string, seq uint64, opts ...nats.JSOpt) (*nats.RawStreamMsg, error)
    GetLastMsg(ctx context.Context, stream string, subject string, opts ...nats.JSOpt) (*nats.RawStreamMsg, error)
    DeleteMsg(ctx context.Context, stream string, seq uint64, opts ...nats.JSOpt) error
    SecureDeleteMsg(ctx context.Context, stream string, seq uint64, opts ...nats.JSOpt) error
    AddConsumer(ctx context.Context, stream string, cfg *nats.ConsumerConfig, opts ...nats.JSOpt) (*nats.ConsumerInfo, error)
    UpdateConsumer(ctx context.Context, stream string, cfg *nats.ConsumerConfig, opts ...nats.JSOpt) (*nats.ConsumerInfo, error)
    DeleteConsumer(ctx context.Context, stream string, consumer string, opts ...nats.JSOpt) error
    ConsumerInfo(ctx context.Context, stream string, name string, opts ...nats.JSOpt) (*nats.ConsumerInfo, error)
    Consumers(ctx context.Context, stream string, opts ...nats.JSOpt) <-chan *nats.ConsumerInfo
    ConsumerNames(ctx context.Context, stream string, opts ...nats.JSOpt) <-chan string
    AccountInfo(ctx context.Context, opts ...nats.JSOpt) (*nats.AccountInfo, error)
    StreamNameBySubject(ctx context.Context, subject string, opts ...nats.JSOpt) (string, error)

    KeyValue(ctx context.Context, bucket string) (KeyValue, error)
    CreateKeyValue(ctx context.Context, cfg *nats.KeyValueConfig) (KeyValue, error)
    DeleteKeyValue(ctx context.Context, bucket string) error
    KeyValueStoreNames(ctx context.Context) <-chan string
    KeyValueStores(ctx context.Context) <-chan nats.KeyValueStatus
}
```

### func Connect

```go
func Connect(cfg Config) (JetStream, error)
```

Connect tries to connect to the NATS server given the Config. Returns an error if Config is not valid or if the connection failed.

## type KeyValue

KeyValue exposes an opinionated way to interact with a NATS JetStream key\-value store. All functions are wrapped with a context because some of them automatically do distributed tracing \(by using the said context\) as well as error recording within traces.

```go
type KeyValue interface {
    Bucket(ctx context.Context) string
    Get(ctx context.Context, key string) (nats.KeyValueEntry, error)
    GetRevision(ctx context.Context, key string, revision uint64) (nats.KeyValueEntry, error)
    Create(ctx context.Context, key string, value []byte) (uint64, error)
    Put(ctx context.Context, key string, value []byte) (uint64, error)
    Update(ctx context.Context, key string, value []byte, last uint64) (uint64, error)
    Delete(ctx context.Context, key string, opts ...nats.DeleteOpt) error
    Purge(ctx context.Context, key string, opts ...nats.DeleteOpt) error
    PurgeDeletes(ctx context.Context, opts ...nats.PurgeOpt) error
    Watch(ctx context.Context, keys string, opts ...nats.WatchOpt) (nats.KeyWatcher, error)
    WatchAll(ctx context.Context, opts ...nats.WatchOpt) (nats.KeyWatcher, error)
    Keys(ctx context.Context, opts ...nats.WatchOpt) ([]string, error)
    History(ctx context.Context, key string, opts ...nats.WatchOpt) ([]nats.KeyValueEntry, error)
    Status(ctx context.Context) (nats.KeyValueStatus, error)
}
```

## type MsgHandler

MsgHandler is like nats.MsgHandler but allows to pass a context for leveraging automatic distributed tracing with OpenTelemetry.

```go
type MsgHandler func(ctx context.Context, msg *nats.Msg)
```

