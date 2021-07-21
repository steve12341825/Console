const BaseEvent = require('../../utils/structures/BaseEvent');
const config = require('../../database/prefix.json');
const express = require('express');
const server = express();

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(` |   bot is online   | \n +-------------------+`);
  }
}