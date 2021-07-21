const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require('../../database/prefix.json')
const Discord = require('discord.js');
const config1 = require('../../config.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'help', []);
  }

  run(client, message, args) {
   const help = new Discord.MessageEmbed()
   .setTitle('Commands List')
   .setColor('FF0000')
   .setDescription('Here is the commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'help activity', value: 'Here is the activity commands list'},
     {name: config.prefix + 'help admin', value: 'Here is the administrator commands list'},
     {name: config.prefix + 'help bridge', value: 'here is the bridge commands list'},
     /*{name: config.prefix + 'help economy', value: 'here is the economy commands list'},*/
     {name: config.prefix + 'help fun', value: 'here is the fun commands list'},
     {name: config.prefix + 'help info', value: 'here is the info commands list'},
     {name: config.prefix + 'help minecraft', value: 'Here is the minecraft commands list'},
     {name: config.prefix + 'help moderation', value: 'here is the moderation commands list'},
     {name: config.prefix + 'help owner', value: 'here is the owneronly commands list'},
     {name: config.prefix + 'help reddit', value: 'Here is the reddit commands list'},
     {name: config.prefix + 'help utility', value: 'Here is the utility commands list'},
     {name: config.prefix + 'help verification', value: 'Here is the verification commands list'},
     {name: config.prefix +'test', value: `Command to check if ${client.user.tag} is working`}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpactivity = new Discord.MessageEmbed()
   .setTitle('Activiy Commands List')
   .setColor('FF0000')
   .setDescription('Here is the activity commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: '📝 **Note:**', value: '```Activities doesn\'t work on mobile```'},
     {name: config.prefix + 'betrayal <voice channel id>', value: 'Betrayal.io'},
     {name: config.prefix + 'chess <voice channel id>', value: 'Chess In The Park'},
     {name: config.prefix + 'fishington <voice channel id>', value: 'Fishington.io'},
     {name: config.prefix + 'poker <voice channel id>', value: 'Poker Night'},
     {name: config.prefix + 'yttogether <voice channel id>', value: 'Youtube Together'}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpadmin = new Discord.MessageEmbed()
   .setTitle('Administrator Commands list')
   .setColor('FF0000')
   .setDescription('Here is the administrator commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'setting' , value: 'Give the settings on current server'},
     {name: config.prefix + 'deleteautorole', value: 'deletes the autorole'},
     {name: config.prefix + 'deleteleavechannel', value: 'Deletes the leave channel'},
     {name: config.prefix + 'deletewelcomechannel', value: 'Deletes the welcome channel'},
     {name: 'setautorole <roleid>', value: 'sets an autorole'},
     {name: config.prefix + 'setleavechannel <channelid>', value: 'Sets a leave channel'},
     {name: config.prefix + 'setwelcomechannel <channelid>', value: 'Sets a welcome channel'}
   )

   const helpbridge = new Discord.MessageEmbed()
   .setTitle('Bridge Commands list')
   .setColor('FF0000')
   .setDescription('Here is the bridge commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'bridgesend <message>', value: 'sends a message to the channel that is linked up'},
     {name: config.prefix + 'bridgesetup <channelid>', value: 'links up servers using webhooks'}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpfun = new Discord.MessageEmbed()
   .setTitle('Fun Commands List')
   .setColor('FF0000')
   .setDescription('Here is the fun commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + '8ball <question>', value: 'What is your question'},
     {name: config.prefix + 'poll <pollmsg>', value: 'poll'},
     {name: config.prefix + 'roll <number from 1-6>', value: 'roll from 1-6'}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helputility = new Discord.MessageEmbed()
   .setTitle('Utility Commands List')
   .setColor('FF0000')
   .setDescription('Here is the utility commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'avatar [user]', value: `shows a user's avatar`},
     {name: config.prefix + 'botinfo', value: `shows the bot's info`},
     {name: config.prefix + 'botinvite', value: `gives the bot's invite`},
     {name: config.prefix + 'embedsay <message>', value: `repeats whatever is said`},
     {name: config.prefix + 'ping', value: `shows the bots ping level`},
     {name: config.prefix + 'reportbug <bug/error>', value: `report an error`},
     {name: config.prefix + 'say <message>', value: `repeats whatever is said`},
     {name: config.prefix + 'website', value: `Gives Console Bot's Website link`}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpinfo = new Discord.MessageEmbed()
   .setTitle('Information Commands List')
   .setColor('FF0000')
   .setDescription('Here is the information commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'covid <all/country>', value: `Covid information (use 'in, au, uk, usa' etc)`},
     {name: config.prefix + 'serverinfo', value: `Gives the server's info`},
     {name: config.prefix + 'userinfo', value: `Gives a user's info`}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpmc = new Discord.MessageEmbed()
   .setTitle('Minecraft Commands List')
   .setColor('FF0000')
   .setDescription('Here is the minecraft commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'achievement <message>', value: `lol`},
     {name: config.prefix + 'mcavatar <avatarname>', value: `mc avatar`},
     {name: config.prefix + 'mcstatus <serverip> <serverport>', value: `Minecraft server status`},
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpmod = new Discord.MessageEmbed()
   .setTitle('Moderation Commands List')
   .setColor('FF0000')
   .setDescription('Here is the moderation commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'ban [user]', value: `bans a user`},
     {name: config.prefix + 'clear <no of messages>', value: `clear messages`},
     {name: config.prefix + 'clearallwarn [user]', value: `clears all the warnings of a user`},
     {name: config.prefix + 'guildprefixdelete', value: 'deletes the prefix for a specific server'},
     {name: config.prefix + 'guildprefixset <prefix>', value: 'changes the prefix for a specific server'},
     {name: config.prefix + 'kick [user]', value: `kicks a user`},
     {name: config.prefix + 'serverinfo', value: `gives the server's info`},
     {name: config.prefix + 'setnickname [user] <nickname>', value: `changes the nickname of a user`},
     {name: config.prefix + 'unban [user]', value: `unbans a user`},
     {name: config.prefix + 'userinfo [user]', value: `gives the user info of a user`},
     {name: config.prefix + 'mute [user]', value: `mutes a user`},
     {name: config.prefix + 'unmute [user]', value: `unmutes a user`},
     {name: config.prefix + 'warn [user]', value: `warns a user`}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpowner = new Discord.MessageEmbed()
   .setTitle('OwnerOnly Commands List')
   .setColor('FF0000')
   .setDescription('Here is the owneronly commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'forceleave <serverid>', value: `forces the bot to leave the server`},
     {name: config.prefix + 'globalprefix <prefix>', value: `changes the bot's prefix`},
     {name: config.prefix + 'restart', value: `restarts the bot`},
     {name: config.prefix + 'serverlist', value: `gives the server list`},
     {name: config.prefix + 'setavatar <avatarurl>', value: `changes the status of the bot`},
     {name: config.prefix + 'setgame <game>', value: `changes the status of the bot`}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpreddit = new Discord.MessageEmbed()
   .setTitle('Reddit Commands List')
   .setColor('FF0000')
   .setDescription('Here is the reddit commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'aww', value: 'Fetches a random post from r/aww'},
     {name: config.prefix + 'creepernation', value: 'Fetches a random post from r/officialcreeperNation'},
     {name: config.prefix + 'dankmeme', value: 'Fetches a random post from r/dankmeme'},
     {name: config.prefix + 'faceplam', value: 'Fetches a random post from r/faceplam'},
     {name: config.prefix + 'gaming', value: 'Fetches a random post from r/gaming'},
     {name: config.prefix + 'meme', value: 'Fetches a random post from r/memes'},
     {name: config.prefix + 'minecraft', value: 'Fetches a random post from r/minecraft'},
     {name: config.prefix + 'minecrafthmmm', value: 'Fetches a random post from r/minecrafthmmm'},
     {name: config.prefix + 'programmerhumor', value: 'Fetches a random post from r/programmerhumor'},
     {name: config.prefix + 'starterpack', value: 'Fetches a random post from r/starterpacks'},
     {name: config.prefix + 'surrealmemes', value: 'Fetches a random post from r/surrealmemes'}
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   const helpverify = new Discord.MessageEmbed()
   .setTitle('Verificaion Commands List')
   .setColor('#FF0000')
   .setDescription('Here is the verification commands list')
   .setThumbnail(client.user.displayAvatarURL())
   .addFields(
     {name: config.prefix + 'verificationdelete', value: 'deletes existing verification channel and role from database'},
     {name: config.prefix + 'verificationlogs', value: 'sets verification logs channel'},
     {name: config.prefix + 'verificationlogsdelete', value: 'deletes verification logs'},
     {name: config.prefix + 'verificationsetup', value: 'sets up verification role and channel'},
     {name: config.prefix + 'verify', value: 'verify to enter the server'},
   )
   .setFooter("Executed by: " + message.author.username, message.author.displayAvatarURL())

   if (args.slice(0).join(' ').includes("activity")) return message.channel.send(helpactivity);

   if (args.slice(0).join(' ').includes("admin")) return message.channel.send(helpadmin);

   if (args.slice(0).join(' ').includes("bridge")) return message.channel.send(helpbridge);

   if (args.slice(0).join(' ').includes("fun")) return message.channel.send(helpfun);

   if (!args[0]) return message.channel.send(help);

   if (args.slice(0).join(' ').includes("info")) return message.channel.send(helpinfo);

   if (args.slice(0).join(' ').includes("minecraft")) return message.channel.send(helpmc);

   if (args.slice(0).join(' ').includes("moderation")) return message.channel.send(helpmod);

   if (args.slice(0).join(' ').includes("owner")) return message.channel.send(helpowner);

   if (args.slice(0).join(' ').includes("reddit")) return message.channel.send(helpreddit);

   if (args.slice(0).join(' ').includes("utility")) return message.channel.send(helputility);

   if (args.slice(0).join(' ').includes("verification"))
   return message.channel.send(helpverify);
  }
}