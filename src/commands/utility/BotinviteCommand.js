const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BotinviteCommand extends BaseCommand {
  constructor() {
    super('botinvite', 'utility', []);
  }

  run(client, message, args) {
    const invitelink = new Discord.MessageEmbed()
          .setTitle("Bot Invite Link")
          .setColor("#FF0000")
          .setThumbnail(client.user.displayAvatarURL())
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          .setDescription(`Click [here to invite](https://discord.com/api/oauth2/authorize?client_id=808237958422855711&permissions=8&scope=bot) the bot`);
        message.channel.send(invitelink);
  }
}