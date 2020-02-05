module.exports = (client) => {
  client.on('warn', (e) => {
    console.warn(e)
    client.channels.find("id", client.config.errorLogChannel).send("**Warning:** ```" + e + "```");
  })
}
