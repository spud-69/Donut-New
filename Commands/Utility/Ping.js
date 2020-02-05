const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color) => {
  
  	try{
  	let msgping1 = new Date();
      let msgping2 = new Date() - message.createdAt;
		const m = await message.channel.send('Ping...');
		const embed = new RichEmbed()
    .setColor(color)
		.addField(':stopwatch: Time', `__**${m.createdTimestamp - message.createdTimestamp}ms**__`)
		.addField(':hourglass_flowing_sand: Latency', `__**${msgping2}ms**__`)
		.addField(':heartbeat: API', `__**${Math.floor(client.ping)}ms**__`)
		return m.edit(`🏓 P${'o'.repeat(Math.floor(client.ping)%5 === 0 ? 0 : Math.floor(Math.random()*5))}ng..`, {embed: embed});
	}catch(e){
		return message.channel.send(`Oh no an error occured :( ${e.message} try again later`);
	}

}


module.exports.help ={
  name: 'ping',
  category: 'Utility',
  description: 'Checks bot ping',
  usage: 'ping'
}

/*
module.exports.help = {
  name: "ping",
  category: "Utility",
  description: "check bot ping",
  usage: "ping"
}*/