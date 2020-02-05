const hastebin = require('hastebin-gen');


exports.run = (bot, msg, args) => {

     let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        if (!args[0]) { return msg.channel.send("What do you want to post in Hastebin?") }

        hastebin(haste).then(r => {

            msg.channel.send("`Posted to Hastebin at this URL:`  " + r);

        }).catch(console.error);

}                
module.exports.help = {
  name: "hastebin",
  category: "SumShit",
   description: "Makes a hastebin",
  usage: "hastebin",
  
}