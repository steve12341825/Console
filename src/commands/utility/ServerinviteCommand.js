const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ServerinviteCommand extends BaseCommand {
  constructor() {
    super('serverinvite', 'utility', []);
  }

  run(client, message, args) {
    const invitelink = new Discord.MessageEmbed()
          .setTitle("Support Server Invite Link")
          .setColor("#FF0000")
          .setThumbnail(client.user.displayAvatarURL())
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          .setDescription(`Click this --> https://support.consolebot.repl.co <-- for the support server`);
        message.channel.send(invitelink);
  }
}