const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const got = require('got');

module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'reddit', []);
  }

  run(client, message, args) {
    const meme = new Discord.MessageEmbed()
       got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        meme.setTitle(`${memeTitle}`);
        meme.setURL(`${memeUrl}`)
        meme.setColor('RANDOM')
        meme.setImage(memeImage);
        meme.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
        message.channel.send(meme);
       });
  }
}