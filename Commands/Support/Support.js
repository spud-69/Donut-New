const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Support Info")
    .setDescription('**Online**- Bot is running perfectly\n**Idle**-Bot has a bug and Developer is trying to locate the bug.\n**DnD**-Developer has located the bug, and is attempting to fix it.\n**Invisiable**-Bot is having connection issues, or Developer is updating the bot.')
    .addField("To see the bot commands use", "`~help`")
    .addField("To report bug use", "`~contact`")
    .addField(
      "If you need help with somehign else",
      "[Support Sever](https://discord.gg/YTK8akv)"
    );

  message.channel.send(embed);

  // message.delete();
};

module.exports.help = {
  name: "support",
  category: "Support",
  description: "gives you ways to get support",
  usage: "support"
};
