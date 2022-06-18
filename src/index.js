const { Client , Intents } = require('discord.js')
const CommandingJS = require('commanding.js')
const config = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready' , () => {
    console.log("Ready!")

    new CommandingJS(client , 'commands')
        .setMongoPath(config.mongo_uri)
})

client.login(config.token)