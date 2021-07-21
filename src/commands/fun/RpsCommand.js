const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RpsCommand extends BaseCommand {
  constructor() {
    super('rps!', 'fun', []);
  }

  run(client, message, args) {
    if(!args[0]) return message.channel.send('Choose `rock, paper or scissor`.');
    
//it exists    //BOT CHOICE
    let options = ['rock', 'paper', 'scissor']; 
    let result = Math.floor(Math.random() * options.length);

    if (args[0] === result) {
      message.channel.send(`I got ${result}, you got ${args[0]} so its a tie`);
    } else if 
    (args[0] === 'rock' && result === 'paper') {
      message.channel.send(`I got ${result}, you got ${args[0]} so i win`);
    } else if 
    (args[0] === 'paper' && result === 'scissor') {
      message.channel.send(`I got ${result}, you got ${args[0]} so i win`);
    } else if 
    (args[0] === 'scissor' && result === 'rock') {
      message.channel.send(`I got ${result}, you got ${args[0]} so i win`);
    } else if 
    (args[0] === 'paper' && result === 'rock')
    {
      message.channel.send(`I got ${result}, you got ${args[0]} so you win`);
    } else if
    (args[0] === 'rock' && result === 'scissor')
    {
      message.channel.send(`I got ${result}, you got ${args[0]} so you win`);
    } else if
    (args[0] === 'scissor' && result === 'paper') {
        message.channel.send(`I got ${result}, you got ${args[0]} so you win`);
     }
  }
};