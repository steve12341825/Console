const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require('../../config.js');

module.exports = class RestartCommand extends BaseCommand {
  constructor() {
    super('restart', 'owner', []);
  }

  async run(client, message, args) {
    if (config.ownerid.includes(message.author.id)) {
      await client.user.setActivity('Bot under development').catch(err => this.client.console.error(err));
      process.exit(1)
    } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}