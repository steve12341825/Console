const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VerificationlogsdeleteCommand extends BaseCommand {
  constructor() {
    super('verificationlogsdelete', 'verification', []);
  }

  run(client, message, args) {
    if(message.member.hasPermission('ADMINISTRATOR')) {
      db.delete(`verification-logs-${message.guild.id}`);
      message.channel.send('deleted the verification logs');
    } else if (config.ownerid.includes(message.author.id)) {
      db.delete(`verification-logs-${message.guild.id}`);
      message.channel.send('deleted the verification logs');
    } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}