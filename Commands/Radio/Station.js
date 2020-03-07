const ms = require("ms");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  
  let command = new Discord.RichEmbed();

  let stations = getStations();
  const StationEmbed = new Discord.RichEmbed()
    .setColor("#0099ff")
    .setTitle("Donut Station Info")
    .setDescription(`Here are the stations that Donut upports
                     ${stations.map(s => `[${s.stations}](${s.usage})${s.desc}`).join('\n')}`)
    //.setImage('https://cdn.glitch.com/efe4aaa0-6615-48b7-9e41-8fc8434ec472%2Fdownload.jpeg?v=1582237169021') 
    .setThumbnail('https://cdn.glitch.com/efe4aaa0-6615-48b7-9e41-8fc8434ec472%2Ftheraphy%20session.jpeg?v=1582320366858')
    .setTimestamp()
    .setFooter(`${message.author.tag}`);
    
  
  message.channel.send(StationEmbed);
};

module.exports.help = {
  name: "radioindo",
  description: "Shows you supported Radio Stations",
  usage: "mansion"
};

function getStations(){
  
  return [
    {
      station: "ILoveRadio",
      desc: "Plays Radio Hits",
      usage: "~r1"
      url: "http://stream01.iloveradio.de/iloveradio1.mp3"
    },
    {
     station: "ILoveBass",
     desc: "Plays hit bass music",
     usage: "~r2"
     url: "http://stream01.iloveradio.de/iloveradio4.mp3"
    },
    {
     station: "ILoveRadioAndChill",
     desc: "Play you hit Radio and Chill music",
     usage: "~r3"
     url: "http://stream01.iloveradio.de/iloveradio10.mp3"
    },
    {
     station: "538IbizaRadio",
     desc: "Play hit Ibiza Music",
     usage: "~r4"
     url http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR19.mp3
    },
   
  ]
  
}
