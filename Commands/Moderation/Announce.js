const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

  if (message.member.roles.find("name","Moderator") || message.author.id == client.config.owner) {
        var sayChannel = message.mentions.channels.first();
        var sayMsg = args.splice(1, args.length - 1).join(" ");
        var role = message.member.highestRole;
        var embed = new Discord.RichEmbed()
            .setColor(role.color)
            .setTimestamp()
            .setAuthor(`From ${message.member.displayName} | ${role.name}`,`${message.author.avatarURL}`)
            .setDescription(sayMsg);
        
        sayChannel.send({embed}).catch(console.error);
    } else {
        message.channel.send("You do not have permission to use this command").catch(console.error);
    }
};


module.exports.help = {
    name: "announce",
    category: "Moderation",
    description: "Sends an announcement (Embed) to the specified channel",
    usage: "announce [channel] [message]",
    example: ".announce #general How is everyone doing?",
   status: "intested"
};