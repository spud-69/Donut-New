const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let inline = true
    
     let Presenceemebed = new Discord.RichEmbed()
    .setTitle('Presence Info')
    .setColor("#00ff00")
    .setDescription('**Online**- Bot is running perfectly\n**Idle**-Bot has a bug and Developer is trying to locate the bug.\n**DnD**-Developer has located the bug, and is attempting to fix it.\n**Invisiable**-Bot is having connection issues, or Developer is updating the bot.');

  
  message.channel.send(Presenceemebed);
  


}
module.exports.help = {
    name: "presence-info",
    category: "Utility",
    description: "Presence info",
    usage: "presence-info",
    status: "Ready"
};