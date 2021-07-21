const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AchievementCommand extends BaseCommand {
  constructor() {
    super('achievement', 'minecraft', []);
  }

  run(client, message, args) {
		if (args.length > 0) {
		    var random = Math.floor(Math.random() * 40);
				var achievement = new Discord.MessageEmbed()
			.setColor('#ff0f00')
      .setImage(`https://minecraftskinstealer.com/achievement/${random}/Achievement%20get!/${args.join('+')}`)
      .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL());
      message.channel.send(achievement);
    } else {
      message.channel.send('You dont have any achievement')
    }
  }
}