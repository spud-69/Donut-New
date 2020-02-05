require('dotenv').config();
const {ShardingManager} = require('discord.js');
const config = require ('./config.json');
const manager = new ShardingManager('./index.js', { token: process.env.TOKEN });
// Bruh
//actually mine is coded wrong 
manager.spawn();
manager.on('launch', async shard => { 
  console.log(`Launched Shard ${shard.id}`) 
})

/*
const { ShardingManager } = require('discord.js');
const config = require('./src/config.json');

const shards = new ShardingManager('./index.js', {
    token: config.env.TOKEN,
    totalShards: 1
});

shards.on('launch', shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});

shards.on('message', (shard, msg) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id} | ${msg._eval} | ${msg._result}`);
});

shards.spawn();

*/
