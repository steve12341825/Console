const BaseCommand = require('../../utils/structures/BaseCommand');
const rgx = /^(?:<@!?)?(\d+)>?$/;
const Discord = require('discord.js');
const config = require('../../config.js');

module.exports = class ForceleaveCommand extends BaseCommand {
  constructor() {
    super('forceleave', 'owner', []);
  }

 async run(client, message, args) {
    if (config.ownerid.includes(message.author.id)) {
      const guildId = args[0];
    if (!rgx.test(guildId))
      return message.channel.send(`Provide a guild`)
    const guild = message.client.guilds.cache.get(guildId);
    if (!guild) return message.channel.send(`Invalid guild ID`)
    await guild.leave();
  } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}