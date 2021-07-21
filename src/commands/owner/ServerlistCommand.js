const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../config.js');

module.exports = class ServerlistCommand extends BaseCommand {
  constructor() {
    super('serverlist', 'owner', []);
  }

  run(client, message, args) {
    if (config.ownerid.includes(message.author.id)) {
      const servers = message.client.guilds.cache.array().map(guild => {
        return `\`${guild.id}\` - **${guild.name}** - \`${guild.memberCount}\` members`;
      });
  
      const embed = new Discord.MessageEmbed()
        .setTitle('Server List')
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('FF0000')
        .setDescription(servers.join('\n'))
        .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())
  
      message.channel.send(embed);

  } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}