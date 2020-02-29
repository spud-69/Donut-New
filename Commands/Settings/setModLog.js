const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  
  let channel = message.mentions.channels.first()
  if(!channel) return message.channel.send('Mention a channel!')
  db.set(`ModLog_${message.guild.id}`, channel.id)
  return message.channel.send(`Sucessfully setted the moderation logs to ${channel.toString()}`)
  
}

module.exports.help = {
  name: "setmodlog"
}