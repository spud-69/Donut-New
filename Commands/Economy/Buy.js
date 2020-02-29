const {Discord, db} = require('./../../index.js')


exports.run = async (client, message, args, config) => {


    let author = db.fetch(`money_${message.author.id}`)

    if (args[0] == 'moderator') {
        if (!message.guild.roles.find("name", 'Vip')) return message.channel.send('I could not find a role by the name of `Vip`, check with the owners.')
        if (author < 1000) return message.channel.send('You need atleast `700$` to purchase the Vip role.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Vip'))

        db.subtract(`money_${message.author.id}`, 1000)
        message.channel.send(message.author.tag + ' You successfully bought the Vip role for `700$`')
    } else if(args[0] == 'Trusted') {
        if (!message.guild.roles.find("name", 'Trusted')) return message.channel.send('I could not find a role by the name of `Trusted`, check with the owners.')
        if (author < 700) return message.channel.send('You need atleast `1800$` to purchase the Trusted role.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Trusted')) // get the role & add it

        db.subtract(`money_${message.author.id}`, 700)
        message.channel.send(message.author.tag + ' You successfully bought the Trusted role for `1800$`')
    }
}
module.exports.help = {
  name: "buy",
  category: "Economy",
  description: "buy things from store",
  usage: "-buy [item name]"
}