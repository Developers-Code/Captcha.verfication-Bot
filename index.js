//====================[ Import Module ]====================\\

const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const color = require("colors")
 
//====================[ Import Settings ]====================\\

const connections = require(`${process.cwd()}/Src/Settings/connections.json`)
const handlers = require(`${process.cwd()}/Src/Settings/handlers.json`)

//====================[ Create Client ]====================\\

const clientSettingsObject = require(`${process.cwd()}/Src/Functions/clientSettingsObject.js`)

//====================[ Functions ]====================\\

const { errorCmdLogsInt } = require(`${process.cwd()}/Src/Functions/errorCmdLogsInt.js`)
const { loadCommands } = require(`${process.cwd()}/Src/Handlers/Loaders/loadCommands.js`)
const { loadEvents } = require(`${process.cwd()}/Src/Handlers/Loaders/loadEvents.js`)
const { loadServer } = require(`${process.cwd()}/Src/Handlers/Loaders/loadServer.js`)
const { loadDatabase } = require(`${process.cwd()}/Src/Handlers/Loaders/loadDatabase.js`)           
const { antiCrash } = require(`${process.cwd()}/Src/Handlers/antiCrash.js`) 
                                                                                            