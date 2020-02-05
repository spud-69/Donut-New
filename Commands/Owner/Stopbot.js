module.exports.run = (client, message, args) => {
  if (message.author.id !== client.config.owner) {
    message.channel.send("Woops, looks like your not my owner").catch(console.error);
    } else {
      console.log("Stopping The bot");
      process.exit(0); 
    }
};

module.exports.help = {
    name: "stop-bot",
    category: "Owner",
    description: "Stops the bot. Currently this is restricted to the owner of the bot.",
    usage: "stop",
    example: ".stop",
    status: "Ready"
};