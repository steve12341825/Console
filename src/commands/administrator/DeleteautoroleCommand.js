const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('easy-json-database');
const db = new Database('./src/database/autorole.json');

module.exports = class DeleteautoroleCommand extends BaseCommand {
  constructor() {
    super('deleteautorole', 'administrator', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.get(`role-${message.guild.id}`);
      db.delete(`role-${message.guild.id}`);

      message.channel.send(`Sucessfully deleted the autorole`);
      
    } else {
      message.channel.send('You don\'t have permission to use this command');
    }
  }
}