const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('easy-json-database');
const db = new Database('./src/database/leave.json');

module.exports = class SetleavechannelCommand extends BaseCommand {
  constructor() {
    super('setleavechannel', 'administrator', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.get(`leave-${message.guild.id}`);
      db.set(`leave-${message.guild.id}`, args[0]);
      
      if (!args[0]) message.channel.send('You didnt give a channel id for the leave channel');

      message.channel.send(`Sucessfully changed the leave channel to <#${args[0]}>`);
      
    } else {
      message.channel.send('You don\'t have permission to use this command');
    }
  }
}