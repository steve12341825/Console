const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'moderation', []);
  }

  run(client, message, args) {
    //check if the user trying to run the command has kick and ban permissions
    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
      message.channel.send("You don't have permission to unmute someone.");
    } else if(!args[0]){
      //if there is no first arg
      message.channel.send("You have to enter a user to unmute.");
    } else {
      try{
        const unmuted = message.mentions.members.first(); //get the first member mentioned
        const unmuter = message.author; //get the user that sent the command

        //check if the user to be unmuted exists
        if(unmuted) {
          //check if the unmuted user can be unmuted
          if(unmuted.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')){
              message.channel.send("You can't unmute that person.");
          } else {
            //have to add the muted role id here
            //let mutedRole = message.guild.roles.cache.find('Muted'); //look for the role with this name
            let mutedRole = message.guild.roles.cache.find(role => role.name === "Muted")
            //if the role exists
            if(mutedRole) {
              unmuted.roles.remove(mutedRole);
              message.channel.send(`<@${unmuted.id}> has been unmuted by <@${unmuter.id}>`)
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
