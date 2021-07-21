const prefix = require('./database/prefix.json');

module.exports = {
  token: process.env.CLIENT_TOKEN,
  port: 8080,
  website: true,
  bot: true,
  detail: `${prefix.prefix}help | ${prefix.prefix}botinvite`,
  ownerid: [ 
    '783932862709760000', 
    '731616369346347008', 
    '390755692459589633',
    '786595005459333130'
  ],
  owner: [
    'Steve12341825#3510', 
    'GameWatch21#2121', 
    'Creeperz653#6530',
    '_Cheatersweb#1117'
  ]
}