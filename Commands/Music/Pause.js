exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (client.config.musicEnabled !== 'true') return message.channel.send('Music commands are disabled');
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Paused the music for you!');
		}
		return message.channel.send('There is nothing playing.');
    
};



exports.help = {
	name: 'pause',
	category: 'Music',
	description: 'Pauses the music',
	usage: 'pause'
};
