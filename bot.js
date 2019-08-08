const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('Ready to RNG');

});

client.on('message', message => {

    if (message.content.substring(0,1) == '$') {
         var args = message.content.substring(1).split(' ');
         var command = args[0];
         args = args.splice(1);
         
        switch(command)
        {
            case 'ping': 
                message.reply("all hail RNG");
                break;
            case 'help':
                message.reply("$order team1,team2,team3,...");
                break;
            case 'order':
                var teams = args[0].split(',')
                //shuffle 7 times
                for(i = 0; i < 7; i++)
                {
                    teams = shuffle(teams);
                }

                //build response text
                var reply = "\r\nList Randomized 7 times, here is your draft order:\r\n";
                for (i = 0; i < teams.length; i++) {
                    reply += (i + 1) + ".) " + teams[i] + "\r\n";
                  } 
                message.reply(reply)
                break;
        }
     }

});

function shuffle(array) {
    //start at the end of the array
    var j = array.length;
    var current, i;
  
    //pick elements until we have reached the start
    while (j) {
  
      // select random element
      i = Math.floor(Math.random() * j--);
  
      //swap current and randomly selected element
      current = array[j];
      array[j] = array[i];
      array[i] = current;
    }
  
    return array;
  } 

client.login(process.env.BOT_TOKEN);
