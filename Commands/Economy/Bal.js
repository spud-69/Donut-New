const {Discord, db} = require('./../../index.js'); 


module.exports.run = async (bot, message, args) => {

    let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;

        message.channel.send('You have a balance of `' + bal + '`')


}



module.exports.help = {
  name: "bal",
  category: "Economy",
  description: "lets you know your balance",
  usage: "-bal"
}