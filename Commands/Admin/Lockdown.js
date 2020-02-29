const config = require("./../../config.json");
exports.run = (client, msg, args, content, cooldown, command, Discord, request) => {
    
    var emitType = args[0];
        
    if (client.config.developers.some(ID => ID == msg.author.id)) {
      msg.channel.send("Woops! You don't have permision to you this command.").catch(console.error);
    }
}

exports.help = {
    name: "emit",
    category: "Admin",
   // description: "Emits all events But this commands dosent work rn so please Refrain from using it",
    description: "This commands dosent work rn so please Refrain from using it",
    usage: "emit [#]",
    example: "",
    status: "Ready"
};