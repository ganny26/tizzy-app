const redis = require('redis');
class RedisConfig {
  constructor({port,host,password}) {
    this.port = port;
    this.host = host;
    this.password = password;
    this.client = this.initialize()
  }

  initialize() {
    return redis.createClient({
      port: this.port,
      host: this.host,
      password: this.password
    })
  }

  setValue(key, value) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, (err, reply) => {
        resolve(reply)
        if (err) {
          reject(err)
        }
      })
    })

  }

  getResult(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        resolve(reply)
        if (err) {
          reject(err)
        }
      })
    })
  }

}

module.exports = RedisConfig
