const Discord = require('discord.js');
const db = require('quick.db')
const defaultPrefix = '~'
module.exports.run = async (bot, message, args) => {
  
  if(args[0] == undefined) return message.channel.send('You cannot set the prefix to nothing!')
  if(args[0] == "reset"){
    db.set(`prefix_${message.guild.id}`, defaultPrefix)
    return message.channel.send(`Succesfully changed the prefix to ${defaultPrefix}`)
  } else {
    db.set(`prefix_${message.guild.id}`, args[0])
    return message.channel.send(`Succesfully changed the prefix to ${args[0]}`)
  }
  
} 
module.exports.help = {
	name: 'settings',
	category: 'Admin',
	description: 'Continues a paused song',
	usage: 'settings'
};
