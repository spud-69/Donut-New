const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
	var m = args.join(' ');
	if (!m) return message.reply('Need content for the embed...');
	const embed = new Discord.RichEmbed()
		.setDescription(m)
		.setColor([114, 137, 218]);
	message.channel.send({ embed });
};

module.exports.help = {
    name: "Embed",
    category: "Utility",
    description: "Sends an announcement (Embed) to the specified channel",
    usage: "embed [channel] [message]",
    example: ".emebed #general How is everyone doing?"
};
