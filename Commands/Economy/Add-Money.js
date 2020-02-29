const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
  
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Sorry! looks like your dont have the BIG BOI permissions to use that.')
  if (!args[0]) return message.reply('Oops You need a set amount of to add')
  if (isNaN(parseInt(args[0]))) return message.reply('Can you count? Please give valid numbers')
  
  
  let user = message.mentions.users.first() || message.author
  // db.add(`money_${message.guild.id}_${message.author.id}`, parseInt(args[0]))
  if(await db.fetch(`money_${message.author.id}`) == null) db.set(`money_${message.author.id}`, 0)
    db.add(`money_${message.author.id}`, parseInt(args[0]))

  message.channel.send('Successfully added ' + args[0] + ' to ' + user)
  
}

module.exports.help = {
  name: "add-money",
  category: "Economy",
  description: "add money to user",
  usage: "-add-money <amount>"
}