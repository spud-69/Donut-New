const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let inline = true
    
     let Stationemebed = new Discord.RichEmbed()
    .setTitle('Stations Info')
    .setColor("#00ff00")
    .setDescription('To play radio use `~r<radio-number>`')
    .addField('Station Name', '[1]ILoveRadio\n[2]ILoveBass\n[3]ILoveRadioAndChill\n[4]538IbizaRadio', true)
    .addField('Station Description', 'Hits songs\nHits Bass music\nHits and Chill Music\nHit Ibiza Muisc', true)
    .addField('Usage', '~r1\n~r2\n~r3\n~r4', true)
    .setTimestamp()
    .setFooter('~radio-info | `${message.author.tag})
  
  
  message.channel.send(Stationemebed);
  


}
module.exports.help = {
    name: "radio-info",
    description: "Shows supported radio stations",
   dev: true
};
