const yoMamma = require('yo-mamma').default;

module.exports.run = async (bot, message, args) => {

    let insult = yoMamma();

    message.channel.send(insult)

}
module.exports.help = {
    name: "yomamma",
    category: "Fun",
    description: "Displays information about AutoMod",
    usage: "yomamma",
    example: "yomamma",
    status: "Ready"
};