const BaseEvent = require('../../utils/structures/BaseEvent');
const Database = require('easy-json-database');
const db = new Database('./src/database/prefix.json');
const config = require('../../config.js');
const Discord = require('discord.js')

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    let guildprefix = db.get(`prefix-${message.guild.id}`);
    if (!guildprefix) guildprefix = client.prefix;
    if (message.content.startsWith(guildprefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(guildprefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);

      } else {
        if (message.content.startsWith(client.prefix)) {
        const [cmdName, ...cmdArgs] = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/\s+/);
        const command = client.commands.get(cmdName);
        if (command) {
          command.run(client, message, cmdArgs);
          }
        }
      }
    }
  }
}