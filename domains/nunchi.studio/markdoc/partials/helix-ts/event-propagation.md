On the front-end, an `Event` is also exposed by the `event` package. Here's an
example consuming an `Event` returned in the `metadata` of a `Response`:
```ts
import axios from 'axios'

import { Event } from '@nunchistudio/helix/event'
import { Response } from '@nunchistudio/helix/integration/rest'

interface metadata {
  event: Event
}

interface data {
  // ...
}

await axios.get<Response<metadata, data>>('/anything')
```
