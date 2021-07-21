const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('easy-json-database');
const db = new Database('./src/database/autorole.json');

module.exports = class SetautoroleCommand extends BaseCommand {
  constructor() {
    super('setautorole', 'administrator', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.get(`role-${message.guild.id}`);
      db.set(`role-${message.guild.id}`, args[0]);
      
      if (!args[0]) message.channel.send('You didnt give a role id');

      message.channel.send(`Sucessfully created an autorole`);
      
    } else {
      message.channel.send('You don\'t have permission to use this command');
    }
  }
}