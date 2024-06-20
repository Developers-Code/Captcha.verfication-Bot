// Require necessary modules
const fs = require('fs');
const path = require('path');
const { Client, Collection } = require('discord.js');
const color = require('colors');
require('dotenv').config();

// Function to load commands and events
const {loadCommands} = require('./Src/Handlers/Loaders/loadCommands');
const {loadEvents} = require('./Src/Handlers/Loaders/loadEvents');


// Function to create client settings object
const clientSettingsObject = require('./Src/Functions/clientSettingsObject');

// Create a new Discord client
const client = new Client(clientSettingsObject());

// Set up collections for commands and events
client.slashCommands = new Collection();
client.events = new Collection();

// Read handlers directory synchronously and load each handler
const handlersDir = './Src/Handlers';
fs.readdirSync(handlersDir).forEach(handlerFile => {
    const handlerPath = path.join(handlersDir, handlerFile);
    
});

// Log in to Discord using bot token from environment variables
client.login(process.env.token).then(() => {
    // Load events, commands, and MongoDB connection
    loadEvents(client, color);
    loadCommands(client, color);
    
}).catch(error => {
    console.error('Error logging in:', error);
});
