module.exports = (client) => {
  client.on('message', async message => {
    
  if (message.author.bot) return;
  if(!message.content.startsWith(client.config.prefix)) return;
  // if (message.content.indexOf(client.config.prefix) !== 0) return;
  if (message.content.includes("/")) return;
    
  //parse commands
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    
  //perform actions
  let commandFile = client.commands.get(command)
  if(commandFile) commandFile.run(client, message, args);


  })
}