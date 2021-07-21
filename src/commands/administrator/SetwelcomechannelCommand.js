const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('easy-json-database');
const db = new Database('./src/database/welcome.json');
module.exports = class SetwelcomechannelCommand extends BaseCommand {
  constructor() {
    super('setwelcomechannel', 'administrator', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.get(`welcome-${message.guild.id}`);
      db.set(`welcome-${message.guild.id}`, args[0]);
      
      if (!args[0]) message.channel.send('You didnt give a channel id for the welcome channel');

      message.channel.send(`Sucessfully changed the welcome channel to <#${args[0]}>`);

    } else {
      message.channel.send('You don\'t have permission to use this command');
    }
  }
}