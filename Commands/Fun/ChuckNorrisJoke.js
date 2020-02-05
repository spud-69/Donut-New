const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    client.jokes.getRandomCNJoke(function(joke){
        message.channel.send(joke)
    })
}

module.exports.help = {
    name: "ChuckNorrisjoke",
    category: "Fun",
    description: "Displays a joke",
    usage: "joke",
    example: "joke",
    status: "Ready"
};