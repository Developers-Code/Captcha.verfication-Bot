//====================[ Import Module ]====================\\

const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const color = require("colors")
 require("dotenv").config();
//====================[ Import Settings ]====================\\

const connections = require("./Src/Settings/connections.json")
const handlers = require("./Src/Settings/handlers.json")

//====================[ Functions ]====================\\

const { loadCommands } = require("./Src/Handlers/Loaders/loadCommands.js")
const { loadEvents } = require("./Src/Handlers/Loaders/loadEvents.js")
const { loadServer } = require("./Src/Handlers/Loaders/loadServer.js")
const { mongoDB } = require("./Src/Handlers/Loaders/mongoDB.js")           

//====================[ Other ]====================\\
const fs = require('fs');
const path = require('path');

//====================[ Create Client ]====================\\
        try {     

const clientSettingsObject = require("./Src/Functions/clientSettingsObject.js")
const client = new Client(clientSettingsObject());

//====================[ Collection ]====================\\                                                                          
client.commands = new Collection();
client.events = new Collection();

//====================[ Handlers ]====================\\  
fs.reddirSync("./Src/Handlers").foreach(handler => {
    require("./Src/Handlers/${handler}") (client);
});

//====================[ Login into the bot ]====================\\                                                                                     
client.log(process.env.token).then(() => {

//====================[ Loaders ]====================\\
    loadEvents(client, color);
    loadCommands(client, color);
    mongoDB(client, color)
})
        } catch (error) {
            console.log(error)
        };
