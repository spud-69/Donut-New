const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');

module.exports = async (client, member, leave, guild) => {
  
//     client.on('guildMemberRemove', leave => {
     const date = new Date()
     console.log(`[${moment(date).format('DD-MM-Y hh:mm: A')}][${leave.guild.name}] User ${leave.user.tag} has left the server.`)
     const logs = leave.guild.channels.find(x => x.name === "logs");

    var leaveChannelID = client.config.joinLogChannel;
    var leaveTime = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      timeZoneName: "short",
      weekday: "short",
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    var embed = new Discord.RichEmbed().setColor(0xff0000).setDescription(`
${member.user} has left the server
**Tag:** ${member.user.tag}
**ID:** ${member.user.id}
**Nickname:** ${member.displayName}
**Created At:** ${member.user.createdAt}
**Left At:** ${leaveTime}
`);
  logs.send(embed)
    // client.channels.find("id", leaveChannelID).send({ embed }).catch(console.error);
    //member.guild.channels.get(await db.fetch(`ModLog_${member.guild.id}`)).send({embed: embed}).catch(console.error)
};
