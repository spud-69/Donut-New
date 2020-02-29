module.exports = (client, klaw, path, fileSync) => {
  
  let cmds = [];
  klaw('./Commands').on('readable', function(){
    let item;
    while(item = this.read()){
      cmds.push(item.path)
    }
  }).on('end', function(){
    cmds.forEach(file => {
      if(file.slice(file.lastIndexOf('/')).slice(1) == "Help") return;
      if(file.endsWith('.js') == true){
        let prop = require(file)
        client.commands.set(prop.help.name, prop)
        if(prop.help.aliases == undefined) return;
        prop.help.aliases.forEach(aliase => {
          client.aliases.set(aliase, prop)
        })
      } else if(fileSync.isDir(file) && file.endsWith('Commands') == false){
        let category = file.slice(file.lastIndexOf('/')).slice(1)
        client.categories.push(category)
      }
    })
  })
  
//   let events = [];
//   klaw('./Events').on('readable', function(){
//     let item;
//     while(item = this.read()){
//       events.push(item.path)
//     }
//   }).on('end', function(){
//     events.forEach(file => {
//       if(file.endsWith('.js') == false || fileSync.isDir(file) == true) return;
//       require(file)(client)
//     })
//   })
  
  let handlers = [];
  klaw('./Handlers').on('readable', function(){
    let item;
    while(item = this.read()){
      handlers.push(item.path) 
    }
  }).on('end', function(){
    handlers.forEach(file => {
      if(file.endsWith('.js') == false || fileSync.isDir(file) == true) return;
      require(file)(client)
    })
  })
  
  let modules = [];
  klaw('./Modules').on('readable', function(){
    let item;
    while(item = this.read()){
      modules.push(item.path)
    }
  }).on('end', function(){
    modules.forEach(file => {
      if(file.endsWith('.js') == false || fileSync.isDir(file) == true) return;
      require(file)(client)
    })
  })
  
}