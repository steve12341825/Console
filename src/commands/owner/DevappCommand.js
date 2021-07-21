const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../config.js');

module.exports = class DevappCommand extends BaseCommand {
  constructor() {
    super('devapp', 'owner', []);
  }

  run(client, message, args) {
     if (config.ownerid.includes(message.author.id)) {
       const devapp = new Discord.MessageEmbed()
       .setTitle('Developer Application')
       .setColor('FF0000')
       .setThumbnail(client.user.displayAvatarURL())
       .setDescription('Console Developer application \n \n **Requirements** \n >_needs to know node.js. \n >_must have atleast one bot created with node.js (discord.js package). \n >_must not have any warns/bans/kicks \n \n **Advantage** \n >_Bot owner role \n >_you\'ll have full access to the bots info and database \n >_you\'ll have full edit access \n \n **Not allowed** \n  >_Youre not allowed to use the role or bot for your own advantage \n >_Your not allowed to randomly delete files in the databse and create random errors that will stop the bot \n \n **Application** \n [Here](https://docs.google.com/forms/d/e/1FAIpQLSeHCJ1ywY2D80AdRjD7WiCNvyzLE2W_Xt3jhXx319rZFN4hUg/viewform?usp=sf_link)')

       message.channel.send(devapp)
    }
  }
}