const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require("easy-json-database");
const db = new Database("./src/database/warns.json");
const config = require('../../config.js');
const Discord = require('discord.js');

module.exports = class WarnCommand extends BaseCommand {
  constructor() {
    super('warn', 'moderation', []);
  }

  async run(client, message, args) {
    const member = message.mentions.members.first();
    const author = message.author.username;
    const channels = db.get(`channels-${message.guild.id}`);
 
    if (!args[1]) {
      let msg = await message.channel.send(`Proper command usage: ${config.prefix}warn @[user] [reason]`);
      msg.delete({ timeout: 3000 });
    }

    if (!member) {
      let msg = await message.channel.send(`Couldn't find ${args[0]}`);
      msg.delete({ timeout: 3000 });
    }

    if (member.id == message.author.id) {
      let msg = await message.channel.send(`You can't warn youself, smarty pants!`);
      msg.delete({ timeout: 3000 });
    }

    args.shift();

    const reason = '' + args.join(' ') + '';

    let warnings = db.get(`warns-${member.id}-${message.guild.id}`);

    db.add(`warns-${member.id}-${message.guild.id}`, 1);

    const logssend = message.guild.channels.cache.get(channels);
      
    //THIS ONE FOR ADMIN/LOG
    const warnlog = new Discord.MessageEmbed()
    .setTitle(`${member.user.username} has been warned my ${message.author.username}`)
    .addFields(
      {
      name: "Moderator:",
      value: "<@" + message.author.id + ">"
      },
      {
      name: 'Warned User',
      value: "<@" + member + ">"
      },
      {
      name: 'Reason', 
      value: reason
      }
    )
    .setColor('FF0000')
    .setFooter(message.author.tag, message.author.displayAvatarURL());
    
    //THIS ONE FOR USER
    const warn = new Discord.MessageEmbed()
    .setTitle(`you have been warned by${message.author.username}`)
    .setColor('FF0000')
    .setDescription(reason)
    .setFooter(message.author.tag, message.author.displayAvatarURL());
    
    member.send(warn);
    logssend.send(warnlog);

    if (warnings > 5) {
      db.set(`reason-${member.id}-${message.guild.id}`, 0);
      member.kick();
      message.channel.send(`${member} has too many warns`);
    }
  }
}