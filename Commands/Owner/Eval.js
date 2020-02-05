module.exports.run = (client, message, args) => {
  if (message.author.id !== client.config.owner) {
    message.channel.send("Woops, You dont have permission to use `.eval`").catch(console.error);;
  } else {
    eval(args.join(' '));
  }
};  
  
module.exports.help = {
  name: "eval",
  category: "Owner",
  description: "Eval script",
  usage: "eval [script]",
  example: "eval [your script]",
  status: "working"
}
   