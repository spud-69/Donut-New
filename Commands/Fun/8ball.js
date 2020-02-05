module.exports = async (client, message, args) => {
  let wishes = args.slice(0).join("");
  let author = message.author.username;

  function get8ball(wishes, author) {
    /**
     * Lemme tell you, im not make this manually.
     * I have the ABSOLUTLY 8 BALL REFERENCES
     * https://en.wikipedia.org/wiki/Magic_8-Ball
     */
    const ballRef = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and try again.",
      "Don't count on in.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."
    ];
    let randomize = Math.floor(Math.random() * ballRef.length);
    if (!wishes)
      return args.missing(
        message,
        "Ask something, please.",
        client.commands.get("8ball").help
      );
    return `\:8ball\: | ${ballRef[randomize]} \*\*${author}\*\*`;
  }
  message.channel.send(get8ball(wishes, author));
};

module.exports.help = {
  name: "8ball",
  category: "Fun",
  description:
    "Displays information about the entered role, including a list of users.",
  usage: "8ball [question ]",
  example: ".8ball am i sexy?",
  status: "intested"
};
