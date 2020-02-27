const Discord = require('discord.js');
const db = require('quick.db');

module.exports = async (client) => {
  client.on('raw', async (event) => {
    let eventName = event.t;
    if(eventName === "MESSAGE_REACTION_ADD"){
  
      if(await db.fetch(`roleReaction_${event.d.guild_id}_${event.d.message_id}`) == null) return;
      let channel = client.channels.get(event.d.channel_id)
      if(channel.message_id == false) return;
      
      let msg = await channel.fetchMessage(event.d.message_id);
      let msgReact = msg.reactions.get(event.d.emoji.name);
      let user = client.users.get(event.d.user_id);
      client.emit('messageReactionAdd', msgReact, user)
      
    } else if(eventName == "MESSAGE_REACTION_REMOVE"){
      
      if(await db.fetch(`roleReaction_${event.d.guild_id}_${event.d.message_id}`) == null) return;
      let channel = client.channels.get(event.d.channel_id);
      if(channel.message_id == false) return;
      
      let msg = await channel.fetchMessage(event.d.message_id);
      let msgReact = msg.reactions.get(event.d.emoji.name);
      let user = client.users.get(event.d.user_id);
      client.emit('messageReactionRemove', msgReact, user)
      
    } else if(eventName == "MESSAGE_REACTION_REMOVE_ALL"){
      
      if(await db.fetch(`roleReaction_${event.d.guild_id}_${event.d.message_id}`) == null) return;
      let channel = client.channels.get(event.d.channel_id);
      if(channel.message_id == false) return;
      
      let msg = await channel.fetchMessage(event.d.message_id);
      client.emit('messageReactionRemoveAll', msg)
      
    }
  })
}