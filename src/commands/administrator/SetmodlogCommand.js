const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require("easy-json-database");
const db = new Database("./src/database/warns.json");

module.exports = class SetmodlogCommand extends BaseCommand {
  constructor() {
    super('setmodlog', 'administrator', []);
  }
//also i am creating a server stats which displayes howmany users are in the server
/*where is the command*/
  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      let channel = guild.channels.cache.find(ch => ch.id === args[0]);
    db.set(`warn-channel-${message.guild.id}`, args[0]);
    message.channel.send(`Server modlog is ${args[0]}`); //just for template lmao
    } else {
      message.channel.send('You don\'t have permission to use this command');
    }
  }
};