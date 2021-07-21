const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'utility', []);
  }

  run(client, message, args) {
    let avataruser = message.mentions.members.first();
    let avatar = new Discord.MessageEmbed()
    avatar.setColor("#FF0000") 
    avatar.setTitle(`Avatar of ` + `${avataruser.user.username}`) 
    avatar.setImage(avataruser.user.displayAvatarURL( {size: 1024, dynamic: true } )) 
    avatar.setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL());
    return message.channel.send(avatar)
  }
}