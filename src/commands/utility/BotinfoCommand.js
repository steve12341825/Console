const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../database/prefix.json');
const moment = require('moment');
const config1 = require('../../config.js');

module.exports = class BotinfoCommand extends BaseCommand {
  constructor() {
    super('botinfo', 'utility', []);
  }

  run(client, message, args) {
    const botinfo = new Discord.MessageEmbed()
  .setTitle('Bot info')
  .setColor('#FF0000')
  .setDescription('Inforamtion about the bot')
  .setThumbnail(client.user.displayAvatarURL())
  .addFields(
      {name: `owners:`, value: `${config1.owner.join(',\n ')}`},
      {name: `prefix:` , value: config.prefix},
      {name: `created on:` , value: `${moment(client.createdAt).format('MMM DD YYYY')}`}
      )
  .setTimestamp()
  .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
  message.channel.send(botinfo);
  }
}