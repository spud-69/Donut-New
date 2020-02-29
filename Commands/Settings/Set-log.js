const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (bot, message, args) => {
  
  if(!message.mentions.channels.first()) return message.channel.send('Mention a channel!')
  db.set(`modLog_${message.guild.id}`, message.mentions.channels.first().id)
  return message.channel.send(`The Moderation Logs have been setted to ${message.mentions.channels.first()}`)
  
}

module.exports.help = {
  name: "SetLog",
  category: "Settings",
  description: "sets moderation logs",
  usage: "-setLog <@channel>"
}