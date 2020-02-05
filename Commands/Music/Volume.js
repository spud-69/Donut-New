module.exports.run = async (client, message, args) => {
  
  if(message.member.voiceChannel == undefined) return message.channel.send('Join a voice Channel to use this command!');
  if(client.musicQueue.get(message.guild.id) == undefined) return message.channel.send('You can\'t change the volume of nothing!');
  if(args[0] == undefined) return message.channel.send('You can\'t turn the volume to nothing!')
  if(isNaN(args[0])) return message.channel.send('Specify a number!')
  if(parseInt(args[0]) < 0) return message.channel.send('Choose a number higher than 0!')
  if(parseInt(args[0]) > 100) return message.channel.send('Choose a number lower than 100!')
  let wantedVolume = parseInt(args[0]) / 100
  client.musicQueue.get(message.guild.id).connection.dispatcher.setVolume(wantedVolume)
  return message.channel.send(`Sucessfully changed the volume to ${args[0]}`)
  
}

//lmfao
/*
_________   ______   _______  _       _________
\__   __/  (  __  \ (  ___  )( (    /|\__   __/
   ) (     | (  \  )| (   ) ||  \  ( |   ) (   
   | |     | |   ) || |   | ||   \ | |   | |   
   | |     | |   | || |   | || (\ \) |   | |   
   | |     | |   ) || |   | || | \   |   | |   
___) (___  | (__/  )| (___) || )  \  |   | |   
\_______/  (______/ (_______)|/    )_)   )_(   
                                               
 _       _________ _        _______ 
( \      \__   __/| \    /\(  ____ \
| (         ) (   |  \  / /| (    \/
| |         | |   |  (_/ / | (__    
| |         | |   |   _ (  |  __)   
| |         | |   |  ( \ \ | (      
| (____/\___) (___|  /  \ \| (____/\
(_______/\_______/|_/    \/(_______/
                                    
 _       _________ _______  _______  _______  _______  _______ 
( (    /|\__   __/(  ____ \(  ____ \(  ____ \(  ____ )(  ____ \
|  \  ( |   ) (   | (    \/| (    \/| (    \/| (    )|| (    \/
|   \ | |   | |   | |      | |      | (__    | (____)|| (_____ 
| (\ \) |   | |   | | ____ | | ____ |  __)   |     __)(_____  )
| | \   |   | |   | | \_  )| | \_  )| (      | (\ (         ) |
| )  \  |___) (___| (___) || (___) || (____/\| ) \ \__/\____) |
|/    )_)\_______/(_______)(_______)(_______/|/   \__/\_______)
*/



/*
 _______  _______  _______  _       
(  ____ )(  ___  )(  ____ )( (    /|
| (    )|| (   ) || (    )||  \  ( |
| (____)|| |   | || (____)||   \ | |
|  _____)| |   | ||     __)| (\ \) |
| (      | |   | || (\ (   | | \   |
| )      | (___) || ) \ \__| )  \  |
|/       (_______)|/   \__/|/    )_)*/





module.exports.help = {
	name: 'volume',
	category: 'Music',
	description: 'Stops the music and clears the queue',
	usage: 'stop'
};
