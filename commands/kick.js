module.exports = {
    name: 'kick',
    description: 'this kicks the person mentioned',
    execute(message, args) {
        const memberMentioned = message.mentions.users.first();
        if (message.member.permissions.has('ADMINISTRATOR')) {
            if (memberMentioned) {
                const memberTartget = message.guild.members.cache.get(memberMentioned.id)
                memberTartget.kick();
                message.channel.send('Oof the user was just blasted from the server');
            } else {
                message.reply('I see u like kicking people.. then try kicking some real people');
            }
        } else {
            message.reply('Only admins get all the fun :(')
        }
    }
}