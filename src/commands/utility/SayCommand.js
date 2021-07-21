const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'utility', []);
  }

  run(client, message, args) {
    if (config.ownerid.includes(message.author.id)) {
    if (args.length > 0) message.channel.send(args.join(' '));

    } else if (config.ownerid.includes(message.author.id)) {
      if (args.length > 0) message.channel.send(args.join(' '));
    } else {
      message.channel.send()
    }
  }
}