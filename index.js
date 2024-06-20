//====================[ Import Module ]====================\\

const { Client, Collection } = require("discord.js");
const color = require("colors");
require("dotenv").config();

//====================[ Import Settings ]====================\\

const connections = require("./Src/Settings/connections.json");
const handlers = require("./Src/Settings/handlers.json");

//====================[ Functions ]====================\\

const { loadCommands } = require("./Src/Handlers/Loaders/loadCommands.js");
const { loadEvents } = require("./Src/Handlers/Loaders/loadEvents.js");
const { mongoDB } = require("./Src/Handlers/Loaders/mongoDB.js");

//====================[ Other ]====================\\
const fs = require('fs');
const path = require('path');

//====================[ Create Client ]====================\\
try {
    const clientSettingsObject = require("./Src/Functions/clientSettingsObject.js");
    const client = new Client(clientSettingsObject());

    //====================[ Collection ]====================\\
    client.commands = new Collection();
    client.events = new Collection();

    //====================[ Handlers ]====================\\  
    const handlersDir = "./Src/Handlers";
    fs.readdirSync(handlersDir).forEach(handlerFile => {
        const handlerPath = path.join(handlersDir, handlerFile);
        require(handlerPath)(client);
    });

    //====================[ Login into the bot ]====================\\                                                                                     
    client.login(process.env.TOKEN).then(() => {

        //====================[ Loaders ]====================\\
        loadEvents(client, color);
        loadCommands(client, color);
        mongoDB(client, color);
    });
} catch (error) {
    console.error('Error starting bot:', error);
}
