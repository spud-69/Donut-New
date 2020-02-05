const Discord = require("discord.js");

module.exports = client => {
  client.on("guildMemberRemove", member => {
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
    client.channels
      .find("id", leaveChannelID)
      .send({ embed })
      .catch(console.error);
  });
};
