const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('easy-json-database');
const db = new Database('./src/database/prefix.json');
const config = require('../../config.js');

module.exports = class GuildprefixsetCommand extends BaseCommand {
  constructor() {
    super('guildprefixset', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR"))       return message.channel.send('You don\'t have permission use that permission.');

        if(!args[0]) return message.channel.send('Please provide a new prefix');

        if(args[1]) return message.channel.send('The prefix can\'t have two spaces');

        db.set(`prefix-${message.guild.id}`, args[0])

        message.channel.send(`Successfully set new prefix to **${args[0]}**`)
  }
}