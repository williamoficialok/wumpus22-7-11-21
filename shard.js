const config = require("./config.js")
const { ShardingManager } = require("discord.js"); 

const manager = new ShardingManager("./index.js", {
    token: config.token,
})

manager.on("shardCreate", shard => {
    console.log(`Shard creado ${shard.id}`)
})

manager.spawn();