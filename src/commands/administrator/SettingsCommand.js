const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const Database = require("easy-json-database");
const db = new Database("./src/database/warns.json");
const dba = new Database('./src/database/autorole.json');
const dbl = new Database('./src/database/leave.json');
const dbw = new Database('./src/database/welcome.json');
const dbv = new Database('./src/database/verification.json');
const dbp = new Database('./src/database/prefix.json');

module.exports = class SetmodlogCommand extends BaseCommand {
  constructor() {
    super('settings', 'administrator', []);
  }

  run(client, message, args) {
    // DATABASE CODE
    
    var warn_channel = "<#" + db.get(`channels-${message.guild.id}`) + ">";
    var welcome_channel = "<#" + dbw.get(`welcome-${message.guild.id}`) + ">";
    var leave_channel = "<#" + dbl.get(`leave-${message.guild.id}`) + ">";
    var autorole_id = "<@&" + dba.get(`role-${message.guild.id}`) + ">";
    var verification_channel = "<#" + dbv.get(`verification-channel-${message.guild.id}`) + ">";
    var verification_role = "<@&" + dbv.get(`verification-role-${message.guild.id}`) + ">";//its <@& role id > for role
    var guild_prefix = dbp.get(`prefix-${message.guild.id}`);
    
    // IF CHECK STATEMENT
    if (dbv.has(`verification-channel-${message.guild.id}`) === false) { verification_channel = "Not Set";
    }
    if (dbv.has(`verification-role-${message.guild.id}`) === false) { 
      verification_role = "Not Set";
    }
    if (dbw.has(`welcome-${message.guild.id}`) === false) {
      welcome_channel = 'Not Set'
    }
    if (dbl.has(`leave-${message.guild.id}`) === false) {
      leave_channel = 'Not Set';
    }
    if(db.has(`channels-${message.guild.id}`) === false) {
      warn_channel = "Not Set";
    }
    if(dbp.has(`prefix-${message.guild.id}`) === false){
      guild_prefix = "Not Set";
    }
    if (dba.has(`role-${message.guild.id}`) === false) {
      autorole_id = 'Not Set';
    }
    
    //what happened to welcome
    //i forgot to remove the ``
    //lmao
    // LIST
    const list = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name}'s Settings`)
    .setDescription(`here is the list of guild settings`)
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(/*
      {name: '📝 **Note:**', value: '```We aren\'t trained enough to create a dashboard. It might be a bit hard to setup.```'},*/
      {name: 'Server Prefix', value: guild_prefix},
      {name: 'Autorole' , value: autorole_id},
      {name: 'Verification Role' , value: verification_role},
      {name: 'Welcome Channel', value: welcome_channel},
      {name: 'Leave Channel' , value: leave_channel},
      {name: 'Warn Channel', value:warn_channel},
      {name: 'Verification Channel', value: verification_channel}
      )
     .setColor('FF0000')
     .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL());
     
    message.channel.send(list); 
  }
};