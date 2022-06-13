'use strict';

const redis = require('redis');
const bcrypt = require('bcrypt');
const db = redis.createClient({
    socket: {
        port: 6379,
        host: "172.25.22.151"
    }
});

console.log("连接redis");
db.connect().then((err) => {
    console.log("连接成功")
});

class User {
    constructor(obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
    }

    save(cb) {
        if (this.id) {
            this.update(cb);
        } else {
            db.incr('user:ids').then((id) => {
                this.id = id;
                this.hashPassword((err) => {
                    if (err) return cb(err);
                    this.update(cb);
                });
            });
        }
    }

    update(cb) {
        const id = this.id;
        db.set(`user:id:${this.name}`, id).then((err) => {
            db.hSet(`user:${id}`, this).then(cb(null));
        });
    }

    hashPassword(cb) {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) return cb(err);
            this.salt = salt;
            bcrypt.hash(this.pass, salt, (err, hash) => {
                if (err) return cb(err);
                this.pass = hash;
                cb();
            });
        });
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name
        };
    }

    static getByName(name, cb) {
        User.getId(name, (id) => {
            User.get(id, cb);
        });
    }

    static getId(name, cb) {
        db.get(`user:id:${name}`).then(cb);
    }

    static get(id, cb) {
        db.hGetAll(`user:${id}`).then((user) => {
            cb(null, new User(user));
        });
    }

    static authenticate(name, pass, cb) {
        User.getByName(name, (err, user) => {
            if (err) return cb(err);
            if (!user.id) return cb();
            bcrypt.hash(pass, user.salt, (err, hash) => {
                if (err) return cb(err);
                if (hash == user.pass) return cb(null, user);
                cb();
            });
        });
    }
}

module.exports = User;
