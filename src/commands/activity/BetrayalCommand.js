const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require("node-fetch");
const Discord = require('discord.js');
const ACTIVITIES = {
    "poker": {
        id: "755827207812677713",
        name: "Poker Night"
    },
    "betrayal": {
        id: "773336526917861400",
        name: "Betrayal.io"
    },
    "youtube": {
        id: "755600276941176913",
        name: "YouTube Together"
    },
    "fishington": {
        id: "814288819477020702",
        name: "Fishington.io"
    },
    "chess": {
      id: "832012586023256104",
      name: "Chess"
    }
};

module.exports = class BetrayalCommand extends BaseCommand {
  constructor() {
    super('betrayal', 'activity', []);
  }

  run(client, message, args) {
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid channel specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I need `CREATE_INSTANT_INVITE` permission");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send("❌ | Could not start **Betrayal.io**!");
                let betrayalembed = new Discord.MessageEmbed()
                .setTitle('Betrayal.io')
                .setColor('FF0000')
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`✅ | Click here to start **Betrayal.io** in <#${channel.id}>:\n <https://discord.gg/${invite.code}>`)
                .setFooter(`executed by: ${message.author.username}`, message.author.displayAvatarURL());
                message.channel.send(betrayalembed);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **Betrayal.io**!");
            })
  }
}