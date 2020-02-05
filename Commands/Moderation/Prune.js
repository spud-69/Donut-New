module.exports.run = (Client, msg, args) => {
    if (msg.member.roles.find("name","Moderator")) {
        var usr = msg.mentions.users.first();
        var amt = args[1];
        if (typeof amt === 'undefined' || !usr) {
            msg.channel.send("You need to provide an amount and @user to delete messages!").catch(console.error);;
        } else {
            msg.channel.fetchMessages({limit: 100})
                .then ((messages) => {
                    var filterUser = usr.id;
                    var filtered = messages.filter(m => m.author.id === filterUser).array().slice(0, amt);      
                    msg.channel.bulkDelete(filtered).then(messages => console.log(`deleted ${messages.size} messages`)).catch(console.error);        
                }).catch(console.error);            
        }
    } else msg.channel.send("I'm sorry, you do not have permission for this command").catch(console.error);
    
};

module.exports.help = {
  name: "prune",
  category: "Moderation",
  description: "Deletes [#] of messages from a channel by specified user",
  usage: "prune [user] [#]",
  example: ".prune [@john_doe#0265] [20]",
  status: "Ready"
};