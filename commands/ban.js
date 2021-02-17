module.exports = {
    name: 'ban',
    description: 'this bans the person mentioned',
    execute(message, args) {
        const memberMentioned = message.mentions.users.first();
        if (message.member.permissions.has('ADMINISTRATOR')) {
            if (memberMentioned) {
                const memberTartget = message.guild.members.cache.get(memberMentioned.id)
                memberTartget.ban();
                message.channel.send(`${memberMentioned} was banned from the server!`);
            } else {
                message.reply('I see u like banning people.. then try banning some real people');
            }
        } else {
            message.reply('Only admins get all the fun :(')
        }
    }
}