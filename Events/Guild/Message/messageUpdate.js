const Discord = require('discord.js');

module.exports = (client) => {
  client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    
    var guild = newMessage.guild.id;
    var editLogChannel = client.config.editLogChannel;
    
    var embed = new Discord.RichEmbed()
        .setColor(0xFFD700)
        .setTimestamp()
        .setTitle(`✏ **Message Edited** ✏`)
        .setDescription(`**Edited By:** ${newMessage.author.tag}\n**Channel:** ${newMessage.channel}`)
        .addField("Old Message", `${oldMessage.content}`)
        .addField("New Message", `${newMessage.content}`);

    client.guilds.find("id",guild).channels.find("id", editLogChannel).send({embed}).catch(console.error);
  })
}
