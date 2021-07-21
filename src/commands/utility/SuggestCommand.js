const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../database/prefix.json')

module.exports = class SuggestCommand extends BaseCommand {
  constructor() {
    super('suggest', 'utility', []);
  }

  run(client, message, args) {
        if (!args[0]) return message.channel.send(`Please do: \`${config.prefix}suggest <suggestion>\``)

        const guild = message.guild
        const suggesthook = new Discord.WebhookClient('861874046693539861', 'fsZ2FxtX6MYCOqoYXxQQs2U-RnqfPvZNj5nCa6sue1nVRBjobWP2xziYYc-YK1MpXZJO')
        const suggestembed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle('Bot Suggestion')
            .addField('Suggestion:', `${args.slice(0).join(' ')}\n\n`)
            .addField('Guild Info:', `${message.guild.name} • \`${message.guild.id}\``)
            .addField('Bot Suggester\'s Info', `${message.author.username} • \`${message.author.id}\``)
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
            .setDescription("Your suggestion got added!")
        message.channel.send(suggestionadded)
  }
}