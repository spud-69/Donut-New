module.exports = async (client, warn) => {
  client.on('warn', (e) => {
    console.warn(e)
   //  let logs = enew.guild.channels.get(await db.fetch(`ModLog_${enew.guild.id}`))
    //client.channels.find("id", client.config.errorLogChannel).send("**Warning:** ```" + e + "```");
  })
}