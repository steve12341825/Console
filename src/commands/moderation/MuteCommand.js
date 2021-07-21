const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  run(client, message, args) {
    //check if the user trying to run the command has permissions to kick and ban members
    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
      message.channel.send("You don't have permission to mute someone.");
    } else if(!args[0]){
      //check if there was a first arg
      message.channel.send("You have to enter a user to mute.");
    } else {
      try{
        const muted = message.mentions.members.first(); //get the first member mentioned
        const muter = message.author; 
        //get the user that send the command 
        //if the muted user exists
        if(muted) {
          //check if the user about to me muted has kick and ban permissions, and if the message author has admin permissions
          if(muted.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')){
              message.channel.send("You can't mute that person.");
          } else {
            //have to create a custom muted role and add the id here
            let mutedRole = message.guild.roles.cache.find(role => role.name === "Muted");//look for the role with this id

            //if the role exists
            if(mutedRole) {
              muted.roles.add(mutedRole); //add the role to the user
              message.channel.send(`<@${muted.id}> successfully muted by <@${muter.id}>`)
            } else {
                message.channel.send("Can't find the muted role.");
            }
          }
        } else {
          message.channel.send("Member not found.");
        }
      } catch(e) {
        console.error(e); //log any errors in he console
      }
    }
  }
}
