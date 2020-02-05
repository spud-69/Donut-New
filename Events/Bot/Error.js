module.exports = (client)=> {
  client.on('error', (e) => {
    console.error(e)
    client.channels.find("id", client.config.errorLogChannel).send("**Error:** ```" + e + "```");
  })
}