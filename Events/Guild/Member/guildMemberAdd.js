const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');

module.exports = async (client, join) => {
    const date = new Date()
    console.log(`[${moment(date).format('DD-MM-Y hh:mm: A')}][${join.guild.name}] User ${join.user.tag} has joined the server.`)
    // const logs = join.guild.channels.find(x => x.name === "logs");
    let logs = join.guild.channels.get(await db.fetch(`ModLog_${join.guild.id}`))
    if (join.user.bot) return;

    const embed = {
        "embed": {
            "color": 0x19bf0a,
            'fields': [
                {
                    'name': 'Member Joined',
                    'value': `${join.user}`
                }
            ],
            footer: {
                'text': `${moment(date).format('DD-MM-Y hh:mm:ss A')}`
            }
        }
    }
    if(!logs) return;
    logs.send(embed)
    
}