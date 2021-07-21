const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission('KICK_MEMBERS')) {
      message.channel.send("You do not have permission to kick someone!");
    } else if(!args[0]){
      //check if there was a first argument
      message.channel.send("You have to enter a user to kick.");
    } else if(!args[1]){
      //check if there was a second argument
      message.channel.send("Enter a kick reason.");
    } else {
      //attempt to kick the user
      try {
        const kicked = await message.mentions.members.first(); 
        const reason = args[1]; //get the second argument//look for the channel called mod-logs
        
        //if the user was kicked
        if(kicked){
          //check if the user is kickable
          if(!message.guild.member(kicked).kickable) return message.channel.send("That user is not kickable.");

          //attempt to kick the user
          kicked.kick();

        } else{
          message.channel.send("Member not found.");
        }
      } catch(e) {
        console.error(e); //log any errors in he console
      }
    }
  }
}