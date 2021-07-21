const BaseEvent = require('../../utils/structures/BaseEvent');
const Database = require('easy-json-database');
const db = new Database('./src/database/leave.json');

module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  async run (client, member) {
    const guildid = member.guild.id;
    const leave = db.get(`leave-${guildid}`);
    const channel = member.guild.channels.cache.get(leave);
	  if (!channel) return;


    channel.send(`**${member.user.username}#${member.user.discriminator}** left ${member.guild}`);
  }
}