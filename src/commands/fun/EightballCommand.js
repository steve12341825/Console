const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class EightballCommand extends BaseCommand {
  constructor() {
    super('8ball', 'fun', []);
  }

  run(client, message, args) {
    if(!args[0]) return message.channel.send('Ask a question.');

    let replies = ['Yes', 'No', 'Ask again later']; 
    let result = Math.floor(Math.random() * replies.length);

    message.reply(`I say: ${replies[result]}`);
  }
}