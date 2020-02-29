const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  var banChannel = client.config.banLogChannel;
  var banUser = message.mentions.users.first();
  var banReason = args.splice(1, args.length - 1).join(" ");
  var banTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    timeZoneName: "short",
    weekday: "short",
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  if (!message.member.roles.find("name", "Owner")) {
    message.channel
      .send("I'm sorry, you do not have permission for this command")
      .catch(console.error);
  } else if (!banUser || !banReason) {
    message.channel.send("The required syntax is `.ban @user [reason]`");
  } else {
    var embed = new Discord.RichEmbed()
      .setColor(0x992d22)
      .setTimestamp()
      .setTitle(`🔨 **${banUser.tag}** has been banned 🔨`).setDescription(`
**User Id:** ${banUser.id}
**Banned By:** ${message.author.tag}
**Reason:** ${banReason}
**When:** ${banTime}
            `);
    message.guild.channels
      .find("id", `${banChannel}`)
      .send({ embed })
      .catch(console.error);

    message.guild
      .ban(banUser)
      .then(user =>
        console.log("Banned " + user.username + " from " + message.guild.name)
      )
      .catch(console.error);
  }
};

module.exports.help = {
  name: "ban",
  category: "Moderation",
  description: "Bans the user specified, and logs to the logging channel",
  usage: "ban @user [reason]",
  example: "",
  status: "Ready"
};
