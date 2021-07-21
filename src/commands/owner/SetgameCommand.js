const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../../config.js');

module.exports = class SetgameCommand extends BaseCommand {
  constructor() {
    super('setgame', 'owner', []);
  }

  run(client, message, args) {
    if (config.ownerid.includes(message.author.id)) {
    if (args.length > 0) client.user.setActivity(args.join(' '));
    message.channel.send('Changed the status to ' + args.join(' '));
    } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}