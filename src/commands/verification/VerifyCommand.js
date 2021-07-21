const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require("easy-json-database");
const db = new Database("./src/database/verification.json");
const Discord = require('discord.js');

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'verification', []);
  }

  run(client, message, args) {
    const dbchannel = message.guild.cache.channels.get(db.get(`verification-channel-${message.guild.id}`));
    const dbrole = db.get(`verification-role-${message.guild.id}`);

    if (!dbchannel) return;
    if (!dbrole) return;

    if (message.channel.id == dbchannel) {
      message.author.send('You have been verified ✅');
      message.author.roles.add(message.guild.roles.cache.get(db.get(`verification-role-${message.guild.id}`)))

    const logs = message.guild.cache.channels.get(db.get(`verification-logs-${message.guild.id}`));

    const logembed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}#${message.author.discriminator} got verified.`)
    .setColor('FF0000')
    .setThumbnail(message.author.displayAvatarURL())
    .addField("Username", `${message.author.username}#${message.author.discriminator}`)
    .addField("User ID", message.author.id)
    .addField("Created at", `${moment(message.author.createdAt).format('MMM DD YYYY')}`)
    
    logs.send(logembed);

    } else if (message.member.roles.cache.has(db.get(`verification-role-${message.guild.id}`))) return;
  }
}