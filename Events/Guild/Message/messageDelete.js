const Discord = require('discord.js');

module.exports = (client) => {
  client.on('messageDelete', message => {
    var guild = message.guild.id;
    var delLogChannel = client.config.deleteLogChannel;
    if (message.content.length > 1900) {var text = "*Content truncated due to length* - " + message.content.substr(0,1900)} else {var text = message.content};
    var embed = new Discord.RichEmbed()
        .setColor(0x992d22)
        .setTimestamp()
        .setTitle(`🗑 **Message Deleted** 🗑`)
        .setDescription(`**Nickname:** ${message.member.displayName}\n**Tag:** ${message.author.tag}\n**From Channel:** ${message.channel.name}\n**Content:** ${text}`);
    client.guilds.get(guild).channels.get(delLogChannel).send({embed}).catch(console.error);
  })
}
