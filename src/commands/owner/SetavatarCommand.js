const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../../config.js');

module.exports = class SetavatarCommand extends BaseCommand {
  constructor() {
    super('setavatar', 'owner', []);
  }

  run(client, message, args) {
    if (config.ownerid.includes(message.author.id)) {
      if(args.length < 2){
        message.channel.send("no new avatar url specified");
        return;
    }
    client.user.setAvatar(args[1])
        .then(user => console.log("--> New avatar: " + user.avatarURL))
        .catch(console.error);
  } else {
      message.channel.send(`you're not authorized to use the commands`);
    }
  }
}