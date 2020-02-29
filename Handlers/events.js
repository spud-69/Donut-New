const klaw = require('klaw');
const fs = require('fs-sync');

module.exports = async (client) => {
  
  let items = [];
  klaw('./Events').on('readable', function(){
    let item;
    while(item = this.read()){
      items.push(item.path)
    }
  }).on('end', function(){
    items.forEach(filePath => {
      if(fs.isDir(filePath) || filePath.endsWith(".js") == false) return;
      let evt = require(filePath);
      let eName = filePath.slice(filePath.lastIndexOf("/")+1).replace(".js","")
      client.on(eName, evt.bind(null, client))
    })
  })
  
}
// const fs = require('fs');
// //it would be console.log not console.error?
// module.exports = async (client) => {
  
//   fs.readdir('./Events', (err, files) => {
//     if (err) return console.log(err);
//     files.forEach(file=> {
//       const eventsFunction = require(`./Events/${file}`);
//       if (eventsFunction.disabled) return;
      
//       const event = eventsFunction.event || file.split('.')[0];
//       const emitter = (typeof eventsFunction.emitter === 'strings' ? event[eventsFunction.emitter] : eventsFunction.emitter) || client;
//       const once = eventsFunction.once;
      
      
//       //ik i couldnt do it 
//       // imma comment your stuff out and write out the 15 line code
//       try{
//         emitter[once ? 'once' : 'on'](event, (...args) => eventsFunction.run(...args))
//       } catch (error) {
//         console.log(error.stack);
//       }
    
//     })

//   })
  
// }


