var Observable = require('rxjs').Observable

/**
 * Create RxRedis wrapper for redis client
 * @param {Object} client - redis client
 * @return {Object}
 */
function rxredis (client) {
  var obj = {}
  obj.__client = client

  ;[
    /* Connection */
    'auth',
    'echo',
    'ping',
    'quit',
    'select',

    /* Keys */
    'del',
    'dump',
    'exists',
    'expire',
    'expireat',
    'keys',
    'migrate',
    'move',
    'object',
    'persist',
    'pexpire',
    'pexpireat',
    'pttl',
    'randomkey',
    'rename',
    'renamenx',
    'restore',
    'sort',
    'ttl',
    'type',
    'wait',
    'scan',

    /* Strings */
    'append',
    'bitcount',
    'bitop',
    'bitpos',
    'decr',
    'decrby',
    'get',
    'getbit',
    'getrange',
    'getset',
    'incr',
    'incrby',
    'incrbyfloat',
    'mget',
    'mset',
    'msetnx',
    'psetex',
    'set',
    'setbit',
    'setex',
    'setnx',
    'setrange',
    'strlen',

    /* Hashes */
    'hdel',
    'hexists',
    'hget',
    'hgetall',
    'hincrby',
    'hincrbyfloat',
    'hkeys',
    'hlen',
    'hmget',
    'hmset',
    'hset',
    'hsetnx',
    'hstrlen',
    'hvals',
    'hscan',

    /* Lists */
    'blpop',
    'brpop',
    'brpoplpush',
    'lindex',
    'linsert',
    'llen',
    'lpop',
    'lpush',
    'lpushx',
    'lrange',
    'lrem',
    'lset',
    'ltrim',
    'rpop',
    'rpoplpush',
    'rpush',
    'rpushx',

    /* Sets */
    'sadd',
    'scard',
    'sdiff',
    'sdiffstore',
    'sinter',
    'sinterstore',
    'sismember',
    'smembers',
    'smove',
    'spop',
    'srandmember',
    'srem',
    'sunion',
    'sunionstore',
    'sscan',

    /* Sorted Sets */
    'zadd',
    'zcard',
    'zcount',
    'zincrby',
    'zinterstore',
    'zlexcount',
    'zrange',
    'zrangebylex',
    'zrevrangebylex',
    'zrangebyscore',
    'zrank',
    'zrem',
    'zremrangebylex',
    'zremrangebyrank',
    'zremrangebyscore',
    'zrevrange',
    'zrevrangebyscore',
    'zrevrank',
    'zscore',
    'zunionstore',
    'zscan',

    /* HyperLogLog */
    'pfadd',
    'pfcount',
    'pfmerge',

    /* Pub/Sub */
    'psubscribe',
    'pubsub',
    'publish',
    'punsubscribe',
    'subscribe',
    'unsubscribe',

    /* Scripting */
    'eval',
    'evalsha',
    'script',

    /* Server */
    'bgrewriteaof',
    'bgsave',
    'client',
    'command',
    'config',
    'dbsize',
    'debug',
    'flushall',
    'flushdb',
    'info',
    'lastsave',
    'monitor',
    'role',
    'save',
    'shutdown',
    'slaveof',
    'slowlog',
    'sync',
    'time',

    /* Transactions */
    'discard',
    'exec',
    'multi',
    'unwatch',
    'watch',

    /* Cluster */
    'cluster',
    'readonly',
    'readwrite'
  ].forEach(function (method) {
    obj[method] = Observable.bindNodeCallback(obj.__client[method].bind(obj.__client))
  })

  if (obj.__client.constructor.name === 'Redis') {
    /* ioredis */

    obj.multi = function () {
      var p = obj.__client.multi()
      var exec = p.exec
      p.exec = function () {
        return Observable
          .bindNodeCallback(exec.bind(p)).apply(null, arguments)
          .map(function (xs) {
            // Map result from [[err, res], [err, res], ...] to [res, res, ...]
            var err = []
            var hasError = false
            var res = xs.map(function (x, i) {
              err[i] = x[0]
              if (x[0] != null && !hasError) hasError = true
              return x[1]
            })
            if (hasError) throw err
            return res
          })
      }
      return p
    }

    obj.pipeline = function () {
      var p = obj.__client.pipeline()
      var exec = p.exec
      p.exec = function () {
        return Observable
          .bindNodeCallback(exec.bind(p)).apply(null, arguments)
          .map(function (xs) {
            // Map result from [[err, res], [err, res], ...] to [res, res, ...]
            var err = []
            var hasError = false
            var res = xs.map(function (x, i) {
              err[i] = x[0]
              if (x[0] != null && !hasError) hasError = true
              return x[1]
            })
            if (hasError) throw err
            return res
          })
      }
      return p
    }
  } else { // obj.__client.constructor.name === 'RedisClient'
    /* node_redis */

    obj.multi = function () {
      var p = obj.__client.multi()
      var exec = p.exec
      p.exec = Observable.bindNodeCallback(exec.bind(p))
      return p
    }
  }

  return obj
}

module.exports = rxredis
