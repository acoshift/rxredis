'use strict'
const Observable = require('rxjs').Observable
const Redis = require('ioredis')
const redis = require('redis')
const client = require('./index')(new Redis())
const client2 = require('./index')(redis.createClient())

client2
  .incr('test')
  .flatMap((id) => client.hmset(`test:${id}`, 'name', 'abc', 'value', Math.floor(Math.random() * 20)), (id) => id)
  .flatMap((id) => client.sadd('test:all', id), (id) => id)
  .flatMap((id) => client.hgetall(`test:${id}`))
  .repeat(10)
  .subscribe(console.log, console.error, () => console.log('1 Completed!'))

client2
  .smembers('test:all')
  .flatMap(Observable.from)
  .flatMap((id) => client.hgetall(`test:${id}`))
  .toArray()
  .subscribe(console.log, console.error, () => console.log('2 Completed!'))

client
  .pipeline()
  .sadd('a', 'a1')
  .hmset('a1', 'name', 'abc', 'value', 123)
  .hgetall('a1')
  .sismember('a', 'a1')
  .exec()
  .map((xs) => {
    let x = xs[2]
    x.isMember = xs[3]
    return x
  })
  .subscribe(console.log, console.error, () => console.log('3 Completed!'))

client2
  .multi()
  .sadd('a', 'a2')
  .hmset('a2', 'name', 'abc', 'value', 123)
  .hgetall('a2')
  .sismember('a', 'a2')
  .exec()
  .map((xs) => {
    let x = xs[2]
    x.isMember = xs[3]
    return x
  })
  .subscribe(console.log, console.error, () => console.log('4 Completed!'))
