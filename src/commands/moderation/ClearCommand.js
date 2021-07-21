const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'moderation', []);
  }

  run(client, message, args) {
   if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to use this command!");
    if(!args[0]) return message.reply('You forgot to include a number!');
    message.channel.bulkDelete(args[0]);
  }
}