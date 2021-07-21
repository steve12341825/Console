const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  async run (client, guild) {
    const serverlogschannel = client.channels.cache.get('865860674843836416');

    const serverlogs = new Discord.MessageEmbed()
    .setTitle(guild.name)
    .setFields(
      {name: 'Server name', value: guild.name},
      {name: 'Server member count', value: guild.memberCount},
      {name: 'Server creation', value:`${moment(message.guild.createdAt).format('MMM DD YYYY')}`},
      {name: 'Server id', value: guild.id},
      {name: 'Server owner name', value: guild.owner.username},
      {name: 'Server owner id', value: guild.owner.id}
    )
    serverlogschannel.send(serverlogs)
  }
}