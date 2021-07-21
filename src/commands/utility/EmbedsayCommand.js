const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class EmbedsayCommand extends BaseCommand {
  constructor() {
    super('embedsay', 'utility', []);
  }

  run(client, message, args) {
    if (args.length > 0)
				var embedtext = new Discord.MessageEmbed()
			.setColor('#FF0000')
      .setThumbnail(client.user.displayAvatarURL())
			.setDescription(args.join(' '));
			else
			message.reply('<:error:860728402246762506> send a message to make it as an embed');
				       
			message.channel.send(embedtext);
  }
}