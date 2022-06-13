const redis = require("redis");

let client = redis.createClient({
    socket:{
        port:6379,
        host:"172.25.22.151"
    }
});

console.log("连接redis");
client.connect().then((err) => {
    console.log("连接成功")
});

async function demo01(){
    await client.set('key', 'value');
    const value = await client.get('key');
    console.log(value);
}

async function demo02(){
    await client.hSet('hkey', 'field', 'value');
    const value = await client.hGetAll('hkey');
    console.log(value);
}

async function demo03(){
    await client.del('lkey');
    await client.rPush('lkey', ['1', '2', '3', '5', '6']);
    const value = await client.lRange('lkey', 0, 2);
    console.log(value);
    value.forEach((item) => {
        console.log(item);
    })
}

demo03();

