
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const prefix = require('./database/prefix.json');
const http = require("http");
const url = require('url');
const fs = require('fs');
const config = require('./config.js');
const client = new Client({
  fetchAllMembers: true,
  presence: {
    activity: {
      name: `${prefix.prefix}help | ${prefix.prefix}botinvite`,
      type: 'WATCHING'
    }
  }
});
if (config.website) {

  http.createServer((req, res) => {
	  let responseCode = 404;
	  let content = fs.readFileSync('./src/website/404.html');
    let content2 = `404 Error`;

	const website = url.parse(req.url, true);
        
	  if (website.pathname === '/') {
	   responseCode = 200;
		  
		  content = fs.readFileSync('./src/website/index.html')
	  }
   
    if (website.pathname === '/developers') {
	  	responseCode = 200;
	  	content = fs.readFileSync('./src/website/developers.html')
    }

    if (website.pathname === '/commands') {
		  responseCode = 200;
		  content = fs.readFileSync('./src/website/commands.html')
    }

    if (website.pathname === '/support') {
      responseCode = 200;
      content = fs.readFileSync('./src/website/support.html')
    }

    if (website.pathname === '/invite') {
      responseCode = 200;
      content = fs.readFileSync('./src/website/invite.html')
    }

    if (website.pathname === '/script') {
	  	responseCode = 200;
	  	content = fs.readFileSync('./src/website/script.js')
    }

    if (website.pathname === '/script2') {
		  responseCode = 200;
		  content = fs.readFileSync('./src/website/script2.js')
    }

    if (website.pathname === '/script3') {
		  responseCode = 200;
		  content = fs.readFileSync('./src/website/script3.js')
    }  

    if (website.pathname === '/logo') {
		  responseCode = 200;
		  content = fs.readFileSync('./src/images/logo.jpg')
    }
     
	  res.writeHead(responseCode, {
		  'content-type': 'text/html;charset=utf-8',
	  });

	  res.write(content);
	  res.end();
  })
	  .listen(config.port);
    console.log(' +-------------------+ \n | website is online |');
    
} else {
  console.log(' +-------------------+ \n | website is offline|');
}

if (config.bot) {

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = prefix.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})()

} else {
  console.log(' |  bot is offline   | \n +-------------------+');
}