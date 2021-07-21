const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class WebsiteCommand extends BaseCommand {
  constructor() {
    super('website', 'utility', []);
  }

  run(client, message, args) {
    const websiteembed = new Discord.MessageEmbed()
    .setTitle('Console\'s website')
    .setColor('FF0000')
    .setDescription('Here is My [website](https://consolebot.repl.co)')
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());

    message.channel.send(websiteembed);
  }
}