const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('easy-json-database');
const db = new Database('./src/database/prefix.json');

module.exports = class GuildprefixdeleteCommand extends BaseCommand {
  constructor() {
    super('guildprefixdelete', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You don\'t have permission to use that.');

        db.delete(`prefix-${message.guild.id}`)

        message.channel.send(`Successfully removed guildprefix`)
  }
}
