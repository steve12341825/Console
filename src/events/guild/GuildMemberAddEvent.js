const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require('discord.js');
const Database = require('easy-json-database');
const db = new Database('./src/database/welcome.json');
const db1 = new Database('./src/database/autorole.json');

module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }

  async run (client, member) {
  if (member.bot) return;
  const guildid = member.guild.id;
  const welcomedb = db.get(`welcome-${guildid}`);
  const channel = member.guild.channels.cache.get(welcomedb);
	if (!channel) return;
  
  const roledb = db1.get(`role-${guildid}`);
  const autorole = member.guild.roles.cache.get(roledb);
  member.roles.add(autorole);
  if (!autorole) return;
  
  const welcomeembed = new Discord.MessageEmbed()
  .setAuthor(`${member.user.username}#${member.user.discriminator}`, member.user.displayAvatarURL())
  .setTitle('Welcome!')
  .setColor('#FF0000')
  .setThumbnail(member.guild.iconURL())
  .setDescription(`Hey ${member}, Welcome to **${member.guild}**`)
  .setFooter(`${member.user.id}`, member.guild.iconURL())

    let humanCount = member.guild.members.filter(member => !member.user.bot).size;
    let memberCount1 = member.guild.memberCount
    let botCount = member.guild.members.filter(member => member.user.bot).size;

  channel.send(welcomeembed);
  }
}