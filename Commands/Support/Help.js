const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  if(args[0] == undefined){
    let generalInfo = new Discord.RichEmbed()
    .setColor(0xE8DFEA)
    .setTimestamp()
    .setFooter(`.help | ${message.author.tag}`)
    .setDescription(`For a list of commands type **~help [category]**. \nThe categories available are: \n${client.categories.map(category => `~${category}`).sort().join('\n')}`);
    message.channel.send({embed: generalInfo}).catch(console.error);
  } else if(client.categories.some(category => category.toLowerCase() == args[0].toLowerCase())){
    let category = client.categories.find(category => category.toLowerCase() == args[0].toLowerCase())
    let cmds = client.commands.filter(cmd => cmd.help.category == category)
    let commands = new Discord.RichEmbed()
    .setColor(0xE8DFEA)
    .setTimestamp()
    .setFooter(`${category} | ${message.author.tag}`)
    .setDescription(`For information about a command type **~help [command]**\n The commands available are \n${cmds.map(cmd => `~${cmd.help.name}`).sort().join('\n')}`);
    message.channel.send({embed: commands}).catch(console.error)
  } else if(client.commands.some(cmd => cmd.help.name.toLowerCase() == args[0].toLowerCase())){
    let cmd = client.commands.find(cmd => cmd.help.name.toLowerCase() == args[0].toLowerCase())
    let command = new Discord.RichEmbed()
    .setColor(0xE8DFEA)
    .setTimestamp()
    .setFooter(`${cmd.help.name} | ${message.author.tag}`)
    .addField(`Name`, cmd.help.name)
    .addField(`Description`, cmd.help.description)
    .addField(`Category`, cmd.help.category)
    .addField(`Usage`, cmd.help.usage)
    message.channel.send({embed: command}).catch(console.error)
  } else {
    return;
  }
  
};

module.exports.help = {
  name: "help",
  category: "Support",
  description: "gives you commands",
  usage: "help"
};
