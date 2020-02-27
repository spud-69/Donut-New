const Discord = require("discord.js");

exports.run = (client, message, args) => {

     if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(async connection => {
            let embed = new Discord.RichEmbed();
            embed.setDescription('**Connected!** Playing Dance Radio.');
            embed.setColor('#A65EA5');
          //other stream  links http://stream01.iloveradio.de/iloveradio4.mp3
            let dispatcher = connection.playArbitraryInput(`http://edge2-a.exa.live365.net/a1725`,{
              seek: 0,
              volume: 1,
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
  name: "donut",
  category: "Radio",
  description: "Plays Dount Live Radio",
  usage: "Dount"
};