const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../database/prefix.json')

module.exports = class ReportbugCommand extends BaseCommand {
  constructor() {
    super('reportbug', 'utility', []);
  }

  run(client, message, args) {
        if (!args[0]) return message.channel.send(`Error! Please do: \`${config.prefix}reportbug <the bug>\` `)

        const guild = message.guild
        const suggesthook = new Discord.WebhookClient('859689002479124480', '8vToD6U9DVHOQnFmKshWwWxzlVo8ZStcGWgFn57Hg-mbUgLwlxwxCW-N_5k7xPMWYuav')
        const suggestembed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle('Bug Report!')
            .addField('Bug:', `${args.slice(0).join(' ')}\n\n`)
            .addField('Guild Info:', `${message.guild.name} • \`${message.guild.id}\``)
            .addField('Bug Reporters Info', `${message.author.username} • \`${message.author.id}\``)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
        
        suggesthook.send({
            username: message.author.username + '#' + message.author.discriminator,
            avatarURL: message.author.displayAvatarURL({ dynamic: true }),
            embeds: [suggestembed]
        })

        const suggestionadded = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle('Reported!')
            .setDescription("Your bug report got added!")
        message.channel.send(suggestionadded)
  }
}