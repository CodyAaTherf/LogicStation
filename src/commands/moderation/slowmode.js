module.exports = {
    name: 'slowmode' ,
    commands: ['slowmode' , 'slow'] ,
    description: 'Changes the slowmode of the channel.' ,
    minArgs: 1 ,
    maxArgs: 1 ,
    requiredPermissions: ['MANAGE_GUILD' , 'ADMINISTRATOR'] ,
    callback: async (message) => {
        if(message.author.bot) return

        const messageArray = message.content.split(' ')
        const args = messageArray.slice(1)
        const secs = args[0]
        const max_secs = 21600

        if(isNaN(secs)){
            return message.channel.send('You need to specify the time in seconds.')
        }

        if(secs > max_secs){
            return message.channel.send(`Maximum number of seconds is ${max_secs}.`)
        }

        try{
            await message.channel.setRateLimitPerUser(secs)

            message.channel.send(`Slowmode is now set to ${secs}`)
        } catch (error){
            message.channel.send('An Error has occoured: ' , error)
            console.log('An error has occoured: ' , error)
        }
    }
}

// code taken from https://javascript.tutorialink.com/slowmode-command/