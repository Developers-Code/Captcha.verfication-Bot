//====================[ Import Module ]====================\\

const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const color = require("colors")
 
//====================[ Import Settings ]====================\\

const connections = require("/Src/Settings/connections.json")
const handlers = require("/Src/Settings/handlers.json")

//====================[ Create Client ]====================\\

const clientSettingsObject = require("/Src/Functions/clientSettingsObject.js")

//====================[ Functions ]====================\\

const { loadCommands } = require("./Src/Handlers/Loaders/loadCommands.js")
const { loadEvents } = require("./Src/Handlers/Loaders/loadEvents.js")
const { loadServer } = require("./Src/Handlers/Loaders/loadServer.js")
const { mongoDB } = require("./Src/Handlers/Loaders/mongoDB.js")           
const { antiCrash } = require("./Src/Functions/Loaders/antiCrash") 

//====================[ Collection ]====================\\                                                                                     
client.commands = new Collection();
client.events = new Collection();

//====================[ Login into the bot ]====================\\                                                                                     
client.log(process.env.token).then(() => {
    loadEvents(client, color);
    loadCommands(client, color);
    mongoDB(client, color)
}).catch(error => {
    console.error(`${color.bold.red(`[Index error]`)} ` + `${error}`.bgRed);
});