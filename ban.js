client.on('message', message =>{
            
      if(message.content.startsWith(PREFIX+'banir')){
        //Define user to ban
         let usuariobanir = message.mentions.members.first()
         //If author don't have permissions
      if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply('Você não pode executar esse comando pois falta')
      //If not have mentions, RETURN
        if(!usuariobanir) return message.reply('Diga quem você deseja banir por favor!')
        //If have permissions, and have a mention, ask the motive
      message.channel.send('Por qual motivo você deseja banir?').then(motivo =>{
                    message.delete()
                    //Create a colletor of motive
          let motivar = message.channel.createMessageCollector(x => message.author.id, {max:1})
         
          .on('collect', motivo1 =>{
           motivao = motivo1.content
           if(!usuariobanir) return message.reply('Você precisa selecionar uma pessoa para efetuar tal ato!')
           //BAN user
           usuariobanir.ban()
              //Send message on channel.
           message.channel.send(`${usuariobanir}, pois ${motivao}`)
          })
        })
       
      }

})
