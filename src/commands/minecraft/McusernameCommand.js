const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class McusernameCommand extends BaseCommand {
  constructor() {
    super('mcavatar', 'minecraft', []);
  }

  run(client, message, args) {
    if (args.length > 0) {
		var mcuser = new Discord.MessageEmbed()
    .setColor('#ff0f00')
    .setImage(`https://mc-heads.net/avatar/${args.join('+')}`)
    .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())
    message.channel.send(mcuser);
    } else {
			message.reply('send a message to make it as an embed');
    }
  }
}