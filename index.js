const Discord = require('discord.js');
const client = new Discord.Client();
const klaw = require('klaw');
const path = require('path');
const fileSync = require('fs-sync');
client.config = require('./config.json');
client.commands = new Discord.Collection();
client.categories = [];
client.aliases = new Discord.Collection();
client.musicQueue = new Discord.Collection();
require('./functions.js')(client, klaw, path, fileSync);

//
client.login(process.env.TOKEN);