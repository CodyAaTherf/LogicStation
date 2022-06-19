const { Client , Intents } = require('discord.js')
const CommandingJS = require('commanding.js')
const config = require('./config.json')

const mongo = require('./mongo')

const client = new Client({ intents: [Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready' , async () => {
    console.log("Ready!")

    new CommandingJS(client , 'commands')
        .setMongoPath(config.mongo_uri)

    await mongo().then((mongoose) => {
        console.log('Connected to DB !')
    })
})

client.login(config.token)