var Observable = require('rxjs').Observable

function rxredis (client) {
  var obj = {}
  obj.__client = client

  /* Keys */
  obj.del = Observable.bindNodeCallback(obj.__client.del.bind(obj.__client))
  obj.dump = Observable.bindNodeCallback(obj.__client.dump.bind(obj.__client))
  obj.exists = Observable.bindNodeCallback(obj.__client.exists.bind(obj.__client))
  obj.expire = Observable.bindNodeCallback(obj.__client.expire.bind(obj.__client))
  obj.expireat = Observable.bindNodeCallback(obj.__client.expireat.bind(obj.__client))
  obj.move = Observable.bindNodeCallback(obj.__client.move.bind(obj.__client))
  obj.rename = Observable.bindNodeCallback(obj.__client.rename.bind(obj.__client))
  obj.renamenx = Observable.bindNodeCallback(obj.__client.renamenx.bind(obj.__client))
  obj.scan = Observable.bindNodeCallback(obj.__client.scan.bind(obj.__client))

  /* Strings */
  obj.append = Observable.bindNodeCallback(obj.__client.append.bind(obj.__client))
  obj.bitcount = Observable.bindNodeCallback(obj.__client.bitcount.bind(obj.__client))
  obj.bitop = Observable.bindNodeCallback(obj.__client.bitop.bind(obj.__client))
  obj.bitpos = Observable.bindNodeCallback(obj.__client.bitpos.bind(obj.__client))
  obj.decr = Observable.bindNodeCallback(obj.__client.decr.bind(obj.__client))
  obj.decrby = Observable.bindNodeCallback(obj.__client.decrby.bind(obj.__client))
  obj.get = Observable.bindNodeCallback(obj.__client.get.bind(obj.__client))
  obj.getbit = Observable.bindNodeCallback(obj.__client.getbit.bind(obj.__client))
  obj.getrange = Observable.bindNodeCallback(obj.__client.getrange.bind(obj.__client))
  obj.getset = Observable.bindNodeCallback(obj.__client.getset.bind(obj.__client))
  obj.incr = Observable.bindNodeCallback(obj.__client.incr.bind(obj.__client))
  obj.incrby = Observable.bindNodeCallback(obj.__client.incrby.bind(obj.__client))
  obj.incrbyfloat = Observable.bindNodeCallback(obj.__client.incrbyfloat.bind(obj.__client))
  obj.mget = Observable.bindNodeCallback(obj.__client.mget.bind(obj.__client))
  obj.mset = Observable.bindNodeCallback(obj.__client.mset.bind(obj.__client))
  obj.msetnx = Observable.bindNodeCallback(obj.__client.msetnx.bind(obj.__client))
  obj.psetex = Observable.bindNodeCallback(obj.__client.psetex.bind(obj.__client))
  obj.set = Observable.bindNodeCallback(obj.__client.set.bind(obj.__client))
  obj.setbit = Observable.bindNodeCallback(obj.__client.setbit.bind(obj.__client))
  obj.setex = Observable.bindNodeCallback(obj.__client.setex.bind(obj.__client))
  obj.setnx = Observable.bindNodeCallback(obj.__client.setnx.bind(obj.__client))
  obj.setrange = Observable.bindNodeCallback(obj.__client.setrange.bind(obj.__client))
  obj.strlen = Observable.bindNodeCallback(obj.__client.strlen.bind(obj.__client))

  /* Hashes */
  obj.hdel = Observable.bindNodeCallback(obj.__client.hdel.bind(obj.__client))
  obj.hexists = Observable.bindNodeCallback(obj.__client.hexists.bind(obj.__client))
  obj.hget = Observable.bindNodeCallback(obj.__client.hget.bind(obj.__client))
  obj.hgetall = Observable.bindNodeCallback(obj.__client.hgetall.bind(obj.__client))
  obj.hincrby = Observable.bindNodeCallback(obj.__client.hincrby.bind(obj.__client))
  obj.hincrbyfloat = Observable.bindNodeCallback(obj.__client.hincrbyfloat.bind(obj.__client))
  obj.hkeys = Observable.bindNodeCallback(obj.__client.hkeys.bind(obj.__client))
  obj.hlen = Observable.bindNodeCallback(obj.__client.hlen.bind(obj.__client))
  obj.hmget = Observable.bindNodeCallback(obj.__client.hmget.bind(obj.__client))
  obj.hmset = Observable.bindNodeCallback(obj.__client.hmset.bind(obj.__client))
  obj.hset = Observable.bindNodeCallback(obj.__client.hset.bind(obj.__client))
  obj.hsetnx = Observable.bindNodeCallback(obj.__client.hsetnx.bind(obj.__client))
  obj.hstrlen = Observable.bindNodeCallback(obj.__client.hstrlen.bind(obj.__client))
  obj.hvals = Observable.bindNodeCallback(obj.__client.hvals.bind(obj.__client))
  obj.hscan = Observable.bindNodeCallback(obj.__client.hscan.bind(obj.__client))

  /* Lists */
  obj.blpop = Observable.bindNodeCallback(obj.__client.blpop.bind(obj.__client))
  obj.brpop = Observable.bindNodeCallback(obj.__client.brpop.bind(obj.__client))
  obj.brpoplpush = Observable.bindNodeCallback(obj.__client.brpoplpush.bind(obj.__client))
  obj.lindex = Observable.bindNodeCallback(obj.__client.lindex.bind(obj.__client))
  obj.linsert = Observable.bindNodeCallback(obj.__client.linsert.bind(obj.__client))
  obj.llen = Observable.bindNodeCallback(obj.__client.llen.bind(obj.__client))
  obj.lpop = Observable.bindNodeCallback(obj.__client.lpop.bind(obj.__client))
  obj.lpush = Observable.bindNodeCallback(obj.__client.lpush.bind(obj.__client))
  obj.lpushx = Observable.bindNodeCallback(obj.__client.lpushx.bind(obj.__client))
  obj.lrange = Observable.bindNodeCallback(obj.__client.lrange.bind(obj.__client))
  obj.lrem = Observable.bindNodeCallback(obj.__client.lrem.bind(obj.__client))
  obj.lset = Observable.bindNodeCallback(obj.__client.lset.bind(obj.__client))
  obj.ltrim = Observable.bindNodeCallback(obj.__client.ltrim.bind(obj.__client))
  obj.rpop = Observable.bindNodeCallback(obj.__client.rpop.bind(obj.__client))
  obj.rpoplpush = Observable.bindNodeCallback(obj.__client.rpoplpush.bind(obj.__client))
  obj.rpush = Observable.bindNodeCallback(obj.__client.rpush.bind(obj.__client))
  obj.rpushx = Observable.bindNodeCallback(obj.__client.rpushx.bind(obj.__client))

  /* Sets */
  obj.sadd = Observable.bindNodeCallback(obj.__client.sadd.bind(obj.__client))
  obj.scard = Observable.bindNodeCallback(obj.__client.scard.bind(obj.__client))
  obj.sdiff = Observable.bindNodeCallback(obj.__client.sdiff.bind(obj.__client))
  obj.sdiffstore = Observable.bindNodeCallback(obj.__client.sdiffstore.bind(obj.__client))
  obj.sinter = Observable.bindNodeCallback(obj.__client.sinter.bind(obj.__client))
  obj.sinterstore = Observable.bindNodeCallback(obj.__client.sinterstore.bind(obj.__client))
  obj.sismember = Observable.bindNodeCallback(obj.__client.sismember.bind(obj.__client))
  obj.smembers = Observable.bindNodeCallback(obj.__client.smembers.bind(obj.__client))
  obj.smove = Observable.bindNodeCallback(obj.__client.smove.bind(obj.__client))
  obj.spop = Observable.bindNodeCallback(obj.__client.spop.bind(obj.__client))
  obj.srandmember = Observable.bindNodeCallback(obj.__client.srandmember.bind(obj.__client))
  obj.srem = Observable.bindNodeCallback(obj.__client.srem.bind(obj.__client))
  obj.sunion = Observable.bindNodeCallback(obj.__client.sunion.bind(obj.__client))
  obj.sunionstore = Observable.bindNodeCallback(obj.__client.sunionstore.bind(obj.__client))
  obj.sscan = Observable.bindNodeCallback(obj.__client.sscan.bind(obj.__client))

  /* Sorted Sets */
  obj.zadd = Observable.bindNodeCallback(obj.__client.zadd.bind(obj.__client))
  obj.zcard = Observable.bindNodeCallback(obj.__client.zcard.bind(obj.__client))
  obj.zcount = Observable.bindNodeCallback(obj.__client.zcount.bind(obj.__client))
  obj.zincrby = Observable.bindNodeCallback(obj.__client.zincrby.bind(obj.__client))
  obj.zinterstore = Observable.bindNodeCallback(obj.__client.zinterstore.bind(obj.__client))
  obj.zlexcount = Observable.bindNodeCallback(obj.__client.zlexcount.bind(obj.__client))
  obj.zrange = Observable.bindNodeCallback(obj.__client.zrange.bind(obj.__client))
  obj.zrangebylex = Observable.bindNodeCallback(obj.__client.zrangebylex.bind(obj.__client))
  obj.zrevrangebylex = Observable.bindNodeCallback(obj.__client.zrevrangebylex.bind(obj.__client))
  obj.zrangebyscore = Observable.bindNodeCallback(obj.__client.zrangebyscore.bind(obj.__client))
  obj.zrank = Observable.bindNodeCallback(obj.__client.zrank.bind(obj.__client))
  obj.zrem = Observable.bindNodeCallback(obj.__client.zrem.bind(obj.__client))
  obj.zremrangebylex = Observable.bindNodeCallback(obj.__client.zremrangebylex.bind(obj.__client))
  obj.zremrangebyrank = Observable.bindNodeCallback(obj.__client.zremrangebyrank.bind(obj.__client))
  obj.zremrangebyscore = Observable.bindNodeCallback(obj.__client.zremrangebyscore.bind(obj.__client))
  obj.zrevrange = Observable.bindNodeCallback(obj.__client.zrevrange.bind(obj.__client))
  obj.zrevrangebyscore = Observable.bindNodeCallback(obj.__client.zrevrangebyscore.bind(obj.__client))
  obj.zrevrank = Observable.bindNodeCallback(obj.__client.zrevrank.bind(obj.__client))
  obj.zscore = Observable.bindNodeCallback(obj.__client.zscore.bind(obj.__client))
  obj.zunionstore = Observable.bindNodeCallback(obj.__client.zunionstore.bind(obj.__client))
  obj.zscan = Observable.bindNodeCallback(obj.__client.zscan.bind(obj.__client))

  obj.eval = Observable.bindNodeCallback(obj.__client.eval.bind(obj.__client))
  obj.evalsha = Observable.bindNodeCallback(obj.__client.evalsha.bind(obj.__client))

  obj.multi = function () {
    var p = obj.__client.multi()
    var exec = p.exec
    p.exec = function () {
      return Observable
        .bindNodeCallback(exec.bind(p))()
        .map(function (xs) {
          return xs.map(function (x) {
            if (x[0]) throw new Error(x[0])
            return x[1]
          })
        })
    }
    return p
  }

  obj.pipeline = function () {
    var p = obj.__client.pipeline()
    var exec = p.exec
    p.exec = function () {
      return Observable
        .bindNodeCallback(exec.bind(p))()
        .map(function (xs) {
          return xs.map(function (x) {
            if (x[0]) throw new Error(x[0])
            return x[1]
          })
        })
    }
    return p
  }

  return obj
}

module.exports = rxredis
