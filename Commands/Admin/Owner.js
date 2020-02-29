const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {

    let owner = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!owner) return message.channel.send("Please tag someone so i can make them the new Server Owner");

    message.channel.send(`Made ${owner} the Server Owner successfully! ✅`)

}        

module.exports.help = {
  name: "owner",
  category: "Admin",
  description: "makes a new server owner",
     usage: "owner",
    example: "owner [@john_doe#6869]",
    status: "Ready"
}