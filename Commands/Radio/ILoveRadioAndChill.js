const Discord = require("discord.js");

exports.run = (client, message, args) => {

     if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(async connection => {
            let embed = new Discord.RichEmbed();
            embed.setDescription('**Connected!** Playing ILoveRadioAndBass.');
             embed.setColor('#A65EA5');

          let dispatcher = connection.playArbitraryInput(`http://stream01.iloveradio.de/iloveradio10.mp3`,{
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
    };
  
module.exports.help = {
  name: "r3",
  description: "Plays ILoveRadioAndBass",
  dev: true
}
