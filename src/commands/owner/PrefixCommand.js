const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require("easy-json-database");
const db = new Database("./src/database/prefix.json");
const config = require('../../config.js');

module.exports = class PrefixCommand extends BaseCommand {
  constructor() {
    super('globalprefix', 'owner', []);
  }

  run(client, message, args) {
    if (config.ownerid.includes(message.author.id)) {
        const dbprefix = db.get('prefix');
        if (args.length > 0) db.set('prefix', args.join(' '));
        message.channel.send('changes the prefix to ' +args.join(' '))
    } else {
        message.channel.send(`you're not authorized to use the commands`);
    }
  }
}