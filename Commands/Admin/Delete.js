module.exports.run = (client, message, args) => {
    if (message.member.roles.find("name","Admin") || message.author.id == client.config.owner) {
        var amt = args[0];
        if (typeof amt === 'undefined') {
            message.channel.send("You need to provide an amount to delete!").catch(console.error);;
        } else {
            message.channel.bulkDelete(amt).then(messages => console.log(`Bulk deleted ${messages.size} messages`)).catch(console.error);
        }
    } else message.channel.send("I'm sorry, you do not have permission for this command").catch(console.error);;
    
};

module.exports.help = {
    name: "delete",
    category: "Admin",
    description: "Deletes messages from a channel. Currently restricted to the Owner role, and requires the to have the 'Manage Messages' permission.",
    usage: "delete [#]",
    example: "",
    status: "Ready"
};