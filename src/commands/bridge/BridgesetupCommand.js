/*
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord =require('discord.js');
const Database = require('easy-json-database');
const db = new Database('./src/database/bridge.json');
  
module.exports = class BridgesetupCommand extends BaseCommand {
  constructor() {
    super('bridgesetup', 'bridge', []);
  }

  run(client, message, args) {
    if (message.author.id == '783932862709760000', '731616369346347008') {
    let guildId = message.guild.id;

    let channelId = message.channel.id;

    let token = db.get(`bridge-token-${guildId}-${channelId}`);

    let id = db.get(`bridge-id-${guildId}-${channelId}`);

    const bridgechannel = client.channels.cache.find(channel => channel.id === args[0]);

    bridgechannel.createWebhook("Console bridge")
    
    .then(webhook => db.set(`bridge-id-${guildId}-${channelId}`, webhook.id, db.set(`bridge-token-${guildId}-${channelId}`, webhook.token)))
    .catch(console.error);

    message.channel.send('This guild is registered');
    } else {
      message.channel.send('You\'re not my owner.');
    }
  }
} 
//you can enable it if you wanr
*/