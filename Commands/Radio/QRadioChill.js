const Discord = require("discord.js");
 module.exports = {
    name: "r6",
    aliases: ["qc"],
    category: "radio",
    description: "Plays QRadioChill",
    dev: true,
    run: async (client, message, args) => {

     if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(async connection => {
            let embed = new Discord.RichEmbed();
          embed.setDescription('**Connected!** Playing QRadioChill.');
             embed.setColor('#A65EA5');

          let dispatcher = connection.playArbitraryInput(`http://edge-audio-02-gos1.sharp-stream.com/qrchill.mp3`,{
              seek: 0,
              volume: 3,
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
