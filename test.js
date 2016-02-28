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

client2
  .multi()
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
  .subscribe(console.log, console.error, () => console.log('4 Completed!'))
