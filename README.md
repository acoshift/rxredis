# RxRedis
RxJS wrapper for Redis

---
### Note
#### ioredis
multi and pipeline result will be map from `[[err, res], [err, res], ...]` to `[res, res, ...]`

and `[err, err, ...]` will be throw if some of `err != null`

---

### Example
```js
'use strict'
const Observable = require('rxjs').Observable
const Redis = require('ioredis')
const client = require('rxredis')(new Redis())

client
  .incr('test')
  .flatMap((id) => client.hmset(`test:${id}`, 'name', 'abc', 'value', Math.floor(Math.random() * 20)), (id) => id)
  .flatMap((id) => client.sadd('test:all', id), (id) => id)
  .flatMap((id) => client.hgetall(`test:${id}`))
  .repeat(10)
  .subscribe(console.log, console.error, () => console.log('1 Completed!'))

client
  .smembers('test:all')
  .flatMap(Observable.fromArray)
  .flatMap((id) => client.hgetall(`test:${id}`))
  .toArray()
  .subscribe(console.log, console.error, () => console.log('2 Completed!'))

client
  .pipeline()
  .hgetall('test:5')
  .sismember('test:all', 5)
  .get('test')
  .exec()
  .map((xs) => {
    let x = xs[0]
    x.id = 5
    x.isMember = xs[1]
    x.last = xs[2]
    return x
  })
  .subscribe(console.log, console.error, () => console.log('3 Completed!'))
```
