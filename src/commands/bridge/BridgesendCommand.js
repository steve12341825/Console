/*const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const Database = require('easy-json-database');
const db = new Database('./src/database/bridge.json');

module.exports = class BridgesendCommand extends BaseCommand {
  constructor() {
    super('bridgesend', 'bridge', []);
  }

  run(client, message, args) {
  if (message.author.id == '783932862709760000', '731616369346347008') {
    const bridgetoken = db.get(`bridge-token-${message.guild.id}-${message.channel.id}`);
    const bridgeid = db.get(`bridge-id-${message.guild.id}-${message.channel.id}`);

    const bridgehook = new Discord.WebhookClient(bridgeid, bridgetoken);
  
  if (args.length > 0) 
      var bridgeembed = new Discord.MessageEmbed()
    .setDescription(args.join(' '))
    .setFooter(message.channel.id)

    bridgehook.send(args.join(' '), {
			username: message.author.username + '#' + message.author.discriminator,
			avatarURL: message.author.avatarURL()
		});

    message.channel.send('✅');
    } else {
      message.channel.send('You\'re not my owner.');
    }
  }
}
*/



