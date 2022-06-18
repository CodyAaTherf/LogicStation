module.exports = {
    name: 'ping' ,
    commands: ['p'] ,
    description: 'Ping' ,
    callback: (message) => {
      message.reply('Pong!')
    }
}