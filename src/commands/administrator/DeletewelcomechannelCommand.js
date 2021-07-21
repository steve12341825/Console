const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('easy-json-database');
const db = new Database('./src/database/welcome.json');


module.exports = class DeletewelcomechannelCommand extends BaseCommand {
  constructor() {
    super('deletewelcomechannel', 'administrator', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.get(`welcome-${message.guild.id}`);
      db.delete(`welcome-${message.guild.id}`);
      
      if (!args[0]) message.channel.send('You didnt give a channel id of the welcome channel');

      message.channel.send(`Sucessfully deleted the welcome channel`);
      
    } else {
      message.channel.send('You don\'t have permission to use this command');
    }
  }
}