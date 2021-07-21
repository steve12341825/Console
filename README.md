# Console
Console is a discord bot created by `Steve12341825#3510` and `Creeperz653#6530` using discord.js and slappey

## Detail
The bot has over `60` commands and `10` categories.

It has many fetures like `Voice Channel Activities` and `Server To Server Bridge`.

we are developing a `leveling` system.

## Installation

go to `Secrets (Environment variables)` and add `BOT_TOKEN` as its key and [your bots token](https://discord.com/developers/applications) as its value.

## Adding Commands

### Category

to add a command create a [category](#src/commands/help/HelpCommand.js) or use and existing

### Command

To create a command first: Go to the decided `Category`
```
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class <command file name> extends BaseCommand {
  constructor() {
    super(<command name>, <command category>, []);
  }

  run(client, message, args) {
    //function code
  }
}
```

## Adding Events

### Category

to add a event create a category

### Event

To create a command first: Go to the decided `Category`
```
const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class <event file name> extends BaseEvent {
  constructor() {
    super(<Event name>);
  }
  async run (client) {
    //function code
  }
}
```

## Note: 
 #### >_  Dont delete the `slappey.json` package. Without it slappey wont work

 #### >_ The `bot: true` in config.js will fun the bot and `bot: false` will turn off the bot. The same thing applies to `website`

 #### >_ do `npm run-script build` in the terminal and:

 ##### Generate

 ##### Command

 ##### Command name
 ##### Catagory name