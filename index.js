const Discord = require('discord.js');
const client = new Discord.Client();
const klaw = require('klaw');
const path = require('path');
const fileSync = require('fs-sync');
const config = require('./config.json')
client.config = require('./config.json');
client.commands = new Discord.Collection();
client.categories = [];
client.aliases = new Discord.Collection();
client.musicQueue = new Discord.Collection();
require('./functions.js')(client, klaw, path, fileSync);




client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'member-log');

  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);
})



client.login(process.env.TOKEN);
