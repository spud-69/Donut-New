const Discord = require("discord.js");
module.exports = {
    name: "r5",
    aliases: ["house"],
    category: "radio",
    description: "Plays 54HosueFM Radio",
    dev: true,
    run: async (client, message, args) => {

     if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(async connection => {
            let embed = new Discord.RichEmbed();
            embed.setDescription('**Connected!** Playing 54HouseFm Radio.');
             embed.setColor('#A65EA5');

          let dispatcher = connection.playArbitraryInput(`http://main.54house.fm/_listen/main/192.m3u`,{
              seek: 0,
              volume: 2,
              passes: 1,
              bitrate: 49000
            })
            message.channel.send(embed);
          })
          .catch(console.log);
      } else {
        message.reply('You are not in a voice channel!');
      }
    }
}
  

