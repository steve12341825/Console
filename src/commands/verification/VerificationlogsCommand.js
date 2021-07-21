const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require('../../config.js');
const Database = require("easy-json-database");
const db = new Database("./src/database/verification.json");

module.exports = class VerificationlogsCommand extends BaseCommand {
  constructor() {
    super('verificationlogs', 'verification', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.set(`verification-logs-${message.guild.id}`, args[0]);

      if (!args[0]) message.channel.send('error, didnt send channel id ' + client.prefix + 'verificationlogs <channel id>')
      message.channel.send('successfully finished setting up the verifylogs');
    } else if (config.ownerid.includes(message.author.id)) {
      db.set(`verification-logs-${message.guild.id}`, args[0]);

      if (!args[0]) message.channel.send('error, didnt send channel id ' + client.prefix + 'verificationlogs <channel id>')
      message.channel.send('successfully finished setting up the verifylogs');
    } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}