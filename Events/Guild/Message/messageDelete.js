const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');

module.exports = (client) => {
client.on('messageDelete', async message => {
    const date = new Date()
    console.log(`[${moment(date).format('DD-MM-Y hh:mm: A')}][${message.guild.name}] User ${message.author.tag} has been deleted`)
    // const logs = message.guild.channels.find(x => x.name === "logs"); 
    let logs = message.guild.channels.get(await db.fetch(`ModLog_${message.guild.id}`))
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
        if (message.author.bot) return;
  }
  if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
      console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
    } 
    let msgContent = ''

    if (message.content.length > 0) {
        msgContent = msgContent + message.content
    }

    if (message.attachments.array().length > 0) {
        msgContent = msgContent + '\n' + message.attachments.array()[0].proxyURL
    }

    const embed = {
        "embed": {
            "color": 0xd05333,
            "title": `Message Removed`,
            'fields': [
                {
                    'name': 'Member:',
                    'value': `${message.author}`,
                    'inline': true
                },
                {
                    'name': 'Channel:',
                    'value': `${message.channel}`,
                    'inline': true
                },
                {
                    'name': 'Message:',
                    'value': `${msgContent}`
                },

            ],
            footer: {
                'text': "Member ID: " + message.id + "  |  " + moment(message.createdAt).format('DD-MM-Y hh:mm:ss A')
            }
        }
    }
logs.send(embed)

    client.on("error", (e) => {
        console.error(e);
    });

    client.on("warn", (e) => {
        console.warn(e);
    });

    client.on("debug", (e) => {
        console.info(e);
    });
})
  
}