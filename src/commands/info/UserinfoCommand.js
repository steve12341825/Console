const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = class UserinfoCommand extends BaseCommand {
  constructor() {
    super('userinfo', 'info', []);
  }

  run(client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS","KICK_MEMEBERS", "ADMINISTRATOR")){
  let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let argst = messageArray.slice(1);
	let com = command.toLowerCase();
  let ment = message.mentions.users.first();
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
	if(!ment) {
    let avatar = message.author.avatarURL();
    let user1embed = new Discord.MessageEmbed()
    .setDescription("User information")
    .setColor('#ff0f00')
    .setThumbnail(avatar)
    .addField("Username", message.member)
    .addField("User ID", message.member.id)
    .addField("Status", message.member.presence.status)
    .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
    return message.channel.send(user1embed);
		}
  let avatar = ment.avatarURL();
  var game = ment.presence.game;

  let userembed = new Discord.MessageEmbed()
  .setTitle("User information")
  .setColor('#ff0f00')
  .setThumbnail(avatar)
  .addField("Username", ment.tag)
  .addField("User ID", ment.id)
  .addField("Status", ment.presence.status)
  .addField("Created at", `${moment(ment.createdAt).format('MMM DD YYYY')}`)
  .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
  return message.channel.send(userembed);
    } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}