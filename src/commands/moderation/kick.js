module.exports = {
    name: 'kick' ,
    commands: 'kick' ,
    description: 'Kicks the first person mentioned.' ,
    syntaxError: 'Use {PREFIX}{COMMAND} {ARGUMENTS}' ,
    arguments: '<@mention_user>' ,
    minArgs: 1 ,
    maxArgs: 1 ,
    requiredPermissions: ['KICK_MEMBERS' , 'ADMINISTRATOR'] ,
    callback: (message) => {
        const { member , mentions } = message
        const tag = `<@${member.id}>`

        const target = mentions.users.first()

        if(target){
            const targetMember = member.guild.members.cache.get(target.id)
            targetMember.kick()

            message.channel.send(`${tag} has been kicked !`)
        }
    }
}