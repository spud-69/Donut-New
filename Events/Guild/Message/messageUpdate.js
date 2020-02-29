const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');

module.exports = (client) => {
  
client.on('messageUpdate', async (eold, enew) => {
    if (enew.author.username === client.user.username) return
    const date = new Date()
    console.log(`[${moment(date).format('DD-MM-Y hh:mm: A')}][${eold.guild.name}] User ${eold.author.tag} has uptaded their message.`)
    // const logs = enew.guild.channels.find(x => x.name === "logs");
    let logs = enew.guild.channels.get(await db.fetch(`ModLog_${enew.guild.id}`))
    if (eold.author.bot) return;

    const embed = {
        "embed": {
            "color": 0x1674ae,
            "title": `Message Changed`,
            'fields': [
                {
                    'name': 'Member',
                    'value': `${enew.author}`,
                    'inline': true
                },
                {
                    'name': 'Channel',
                    'value': `${enew.channel}`,
                    'inline': true
                },
                {
                    'name': 'Old Message',
                    'value': `${eold.content}`
                },
                {
                    'name': 'New Message',
                    'value': `${enew.content}`
                }
            ],
            footer: {
                'text': `${moment(date).format('DD-MM-Y hh:mm:ss A')}`
            }
        }
    }
    logs.send(embed)
})
//   client.on('messageUpdate', (oldMessage, newMessage) => {
//     if (newMessage.author.bot) return;
    
//     var guild = newMessage.guild.id;
//     var editLogChannel = client.config.editLogChannel;
    
//     var embed = new Discord.RichEmbed()
//         .setColor(0xFFD700)
//         .setTimestamp()
//         .setTitle(`✏ **Message Edited** ✏`)
//         .setDescription(`**Edited By:** ${newMessage.author.tag}\n**Channel:** ${newMessage.channel}`)
//         .addField("Old Message", `${oldMessage.content}`)
//         .addField("New Message", `${newMessage.content}`);

//     client.guilds.find("id",guild).channels.find("id", editLogChannel).send({embed}).catch(console.error);
//   })
}