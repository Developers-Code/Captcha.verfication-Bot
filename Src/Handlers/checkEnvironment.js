//====================[ Import Module ]====================\\
const { ChatInputCommandInteraction, Client, EmbedBuilder } = require("discord.js");

//====================[ settings ]====================\\
const settings = require("./../Settings/settings.json");
const connections = require("./../Settings/connections.json");
const handlers = require("./../Settings/connections.json");
const webhook = require("./../Settings/webhook.json");
//====================[ Functions ]====================\\
const errorCmdLogs = require("./../Functions/errorCmdLogs")

//====================[ Other ]====================\\
const color = require("colors")

//====================[ Code ]====================\\

module.exports = {
    name: "checkEnvironment",
    once: true,

    async execute(client) {
        try {

        } catch (error) {
            errorCmdLogs(client, interaction, error)
        }
    }
}