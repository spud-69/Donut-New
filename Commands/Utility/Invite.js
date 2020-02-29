const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setTitle('INVITE ME')
 .setDescription("[**Invite**](https://discordapp.com/api/oauth2/authorize?client_id=651916026099007544&permissions=0&scope=bot)\nUse this invite to invite the bot in your server!")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .setTimestamp()
 .setFooter(message.author.tag)
 message.channel.send(inviteEmbed);
 //message.delete();
}

exports.help = {
  name: "invite",
  category: "System",
  usage: "invite",
  example: "invite",
  status: "working"
}