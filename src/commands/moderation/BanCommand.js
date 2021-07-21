const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission('BAN_MEMBERS', "ADMINISTRATOR")) {
      message.channel.send("You do not have permission to ban someone!");
    } else if(!args[0]){
      //check if there was no first argument
      message.channel.send("You have to enter a user to ban.");
    } else if(!args[1]){
      //check if there was no second argument
      message.channel.send("Enter a ban reason.");
    } else {
      //attempt to ban the user
      try {
        const banned = await message.mentions.members.first(); //get the first member that was mentioned//get the user that sent the command
        const reason = args[1]; //get the second argument//attempt to find the channel called mod-logs

        //if the banned user exists
        if(banned){
          //if the user is not bannable return a message to the channel
          if(!message.guild.member(banned).bannable) return message.channel.send("That user is not bannable.");

          await banned.ban(); //ban the user

        } else{
            message.channel.send("Member not found.");
        }
      } catch(e) {
        console.error(e); //log any errors in the console
      }
    }
  }
}