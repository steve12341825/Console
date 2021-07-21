const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'utility', []);
  }

  run(client, message, args) {
    const ping = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle('Discord Ping')
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`This is the time that it took your message to reach my server, the API latency is the time that it took for discord's servers to respond.\n\n**Bot Latency**:\n\`\`\`${message.createdTimestamp - message.createdTimestamp}ms \`\`\` **API Latency:**\n\`\`\`${Math.round(client.ws.ping)}ms\`\`\`|🏓 Pong!`)
    .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())
    message.channel.send(ping);
  }
}