const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require("easy-json-database");
const db = new Database("./src/database/warns.json");

module.exports = class ClearwarningCommand extends BaseCommand {
  constructor() {
    super('clearallwarns', 'moderation', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('KICK_MEMBERS'|| "ADMINISTRATOR")) { 
    let mentioned = message.mentions.members.first() || message.author;
    let guild = message.guild.id;
    let warn = db.get(`warns-${member.id}-${message.guild.id}`);
    if (args.length > 0) 
    db.delete(`warns-${member.id}-${message.guild.id}`);
    message.channel.send('cleared all warns for <@' + mentioned + '>');
    } else {
      message.channel.send('You dont have the permissions');
    }
  }
}