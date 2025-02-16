/*const whosOnline = (friends) => {
    // Your code here...
      let personOnline = {
        online: [],
        offline: [],
        away: []
      };
      for(let i = 0; i < friends.length; i++){
        
      if (friends[i].status === 'online' && friends[i].lastActivity <= 10){
        personOnline.online.push(friends[i].username);
        }
        else if(friends[i].status === 'online' && friends[i].lastActivity > 10){
          personOnline.away.push(friends[i].username);
        }
        else{
          personOnline.offline.push(friends[i].username);
        }
      }
      return personOnline;
    }

    console.log(whosOnline([{
        username: 'David',
        status: 'online',
        lastActivity: 10
      }, {
        username: 'Lucy', 
        status: 'offline',
        lastActivity: 22
      }, {
        username: 'Bob', 
        status: 'online',
        lastActivity: 104
      }]));*/

     /* const whosOnline = (friends) => {
        // Your code here...
          let personOnline = {
            online: [],
            offline: [],
            away: []
          };
          for(let i = 0; i < friends.length; i++){
            
          if (friends[i].status === 'online' && friends[i].lastActivity <= 10){
            personOnline.online.push(friends[i].username);
            }
            else if(friends[i].status === 'online' && friends[i].lastActivity > 10){
              personOnline.away.push(friends[i].username);
            }
            else{
              personOnline.offline.push(friends[i].username);
            }
          }
      for(let a = 0; a < personOnline.length; a++){
      if(personOnline[a] === []){
        delete personOnline[a];
        }
        }
          return personOnline;
        };*/

        const whosOnline = (friends) => {
            const status = {
                online: [],
                offline: [],
                away: []
            };

            for(let i = 0; i < friends.length; i++){

                const friend = friends[i];

                if(friend.status === 'online' && friend.lastActivity <= 10){
                    status.online.push(friend.username)
                } else if(friend.status === 'offline'){
                    status.offline.push(friend.username)
                } else if(friend.status === 'online' && friend.lastActivity > 10){
                    status.away.push(friend.username)
                }
            }
            if(status.offline.length < 1){
                delete status.offline;
            }
            
            if(status.online.length < 1){
                delete status.online;
            }
            
            if(status.away.length < 1){
                delete status.away;
            }

            return status;
        }

        console.log(whosOnline([{
            username: 'David',
            status: 'online',
            lastActivity: 10
          }, {
            username: 'Lucy', 
            status: 'offline',
            lastActivity: 22
          }, {
            username: 'Bob', 
            status: 'online',
            lastActivity: 104
          }]));