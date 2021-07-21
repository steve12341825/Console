const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require('../../config.js');
const Database = require("easy-json-database");
const db = new Database("./src/database/verification.json");

module.exports = class VerificationdeleteCommand extends BaseCommand {
  constructor() {
    super('verificationdelete', 'verification', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.delete(`verification-channel-${message.guild.id}`);
      db.delete(`verification-role-${message.guild.id}`);
      message.channel.send('deleted the verification');
    } else if (config.ownerid.includes(message.author.id)) {
      db.delete(`verification-channel-${message.guild.id}`);
      db.delete(`verification-role-${message.guild.id}`);
      message.channel.send('deleted the verification channel and role');
    } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}