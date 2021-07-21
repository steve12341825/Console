const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require('../../config.js');
const Database = require("easy-json-database");
const db = new Database("./src/database/verification.json");

module.exports = class VerificationsetupCommand extends BaseCommand {
  constructor() {
    super('verificationsetup', 'verification', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      if (!args[0]) message.channel.send(`${client.prefix}verificationsetup <channel id> <role id>`);

      if (!args[1]) message.channel.send(`${client.prefix}verificationsetup <channel id> <role id>`);

      db.set(`verification-channel-${message.guild.id}`, args[0]);
      db.set(`verification-role-${message.guild.id}`, args[0]);
      message.channel.send('successfully finished the setup. plus you can do `' + client.prefix + 'verificationlogs <channel id>` to see who has verified');
    } else if (config.ownerid.includes(message.author.id)) {
      if (!args[0]) message.channel.send(`${client.prefix}verificationsetup <channel id> <role id>`);

      if (!args[1]) message.channel.send(`${client.prefix}verificationsetup <channel id> <role id>`);

      db.set(`verification-channel-${message.guild.id}`, args[0]);
      
      db.set(`verification-role-${message.guild.id}`, args[0]);
      message.channel.send('successfully finished the setup. plus you can do `' + client.prefix + 'verificationlogs <channel id>` to see who has verified');
    } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}