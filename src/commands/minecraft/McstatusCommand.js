const BaseCommand = require('../../utils/structures/BaseCommand');
const util = require('minecraft-server-util');
const Discord = require('discord.js')

module.exports = class McstatusCommand extends BaseCommand {
  constructor() {
    super('mcstatus', 'minecraft', []);
  }

  run(client, message, args) {
 if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
                      
        
            const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Mc server status')
            .setThumbnail(response.favicon || client.user.displayAvatarURL())
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version},
                {name: 'description', value: response.description},
                {name: 'latency', value: response.roundTripLatency + ' ping/ms'}
            )
            .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
          const embed_error = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('ERROR')
            .addFields(
              {name: 'We cant Find the server you request' , value: 'You probably insert the wrong IP/Domain or Port'}
              )
            .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL());
            message.channel.send(embed_error);
            throw error;
        })
  }
}