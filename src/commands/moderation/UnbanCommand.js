const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  run(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return msg.channel.send(`**${msg.author.username}**, You do not have perms to unban someone`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return msg.channel.send(`**${msg.author.username}**, I do not have perms to unban someone`)
    }
    
    let userID = args[0]
      message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      message.guild.members.unban(bUser.user)
      message.channel.send(`User <@${userID}> has unbanned`)
    })
  }
}