'use strict';
const redis = require('redis');
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

class Entry {
    constructor(obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
    }

    static async getRange(from, to, cb) {
        var items = await db.lRange('entries', from, to);
        let entries = [];
        items.forEach((item) => {
            entries.push(JSON.parse(item));
        });
        console.log(entries);
        cb(null, entries);
    }

    save(cb) {
        const entryJSON = JSON.stringify(this);
        db.lPush('entries', entryJSON).then(() => {
            cb();
        });
    }

    static count(cb) {
        db.lLen('entries').then(cb);
    }
}

module.exports = Entry;
