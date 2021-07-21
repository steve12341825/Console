const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../config.js');

module.exports = class pinggamewatch extends BaseCommand {
  constructor() {
    super('WakeGame', 'owner', []);
  }
 async run(client, message, args) {
    if (config.ownerid.includes(message.author.id)) {
    message.channel.send('<@390755692459589633> WAKE UP');
    message.channel.send('<@390755692459589633> WAKE UP');
    message.channel.send('<@390755692459589633> WAKE UP');
  } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}
//trolololol