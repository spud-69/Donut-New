const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  
  if(bot.config.developers.find(ID => ID == message.author.id) == undefined) return;
  let evaulate = args.join(' ')
  try{
    let evaluation = await eval(evaulate)
    let evalEmbed = new Discord.RichEmbed()
  evalEmbed.setTitle('Evaluate')
  evalEmbed.setColor('#33FFD1')
  evalEmbed.addField('Input', `\`\`\`js
${evaulate}\`\`\``)
  evalEmbed.addField('Output', `\`\`\`js
${evaluation}\`\`\``)
  return message.channel.send({embed: evalEmbed})
  }catch(e){
    message.channel.send(`Cannot send result`)
    return message.channel.send(`\`\`\`js
${e}\`\`\``)
  }
  
}
  
module.exports.help = {
  name: "eval",
  category: "Owner",
  description: "Eval script",
  usage: "eval [script]",
  example: "eval [your script]",
  status: "working"
}
   