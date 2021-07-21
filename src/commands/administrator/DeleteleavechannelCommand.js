const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('easy-json-database');
const db = new Database('./src/database/leave.json');

module.exports = class DeleteleavechannelCommand extends BaseCommand {
  constructor() {
    super('deleteleavechannel', 'administrator', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.get(`leave-${message.guild.id}`);
      db.delete(`leave-${message.guild.id}`);
      
      if (!args[0]) message.channel.send('You didnt give a channel id of the leave channel');

      message.channel.send(`Sucessfully deleted the leave channel`);
      
    } else {
      message.channel.send('You don\'t have permission to use this command');
    }
  }
}