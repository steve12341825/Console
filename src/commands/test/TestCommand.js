const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('test command works');
  }
}