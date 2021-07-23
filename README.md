# Console
Console is a discord bot created by `Steve12341825#3510` and `Creeperz653#6530` using discord.js and slappey

## Detail
The bot has over `60` commands and `10` categories.

It has many fetures like `Voice Channel Activities` and `Server To Server Bridge`.

we are developing a `leveling` system.

## Installation

create a `.env` file and save the bots token

```
CLIENT_TOKEN="Your bots token"
```

## Adding Commands

### Commands

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

### Events

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
