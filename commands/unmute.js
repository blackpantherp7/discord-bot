module.exports = {
    name: 'unmute',
    description: 'this unmutes the person mentioned',
    execute(message, args) {
        const target = message.mentions.users.first();
        if (message.member.permissions.has('ADMINISTRATOR')) {
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

                let memberTarget = message.guild.members.cache.get(target.id);
                if (message.mentions.roles.has(role => role.name === 'Mute')) {
                    message.channel.send(`<@${memberTarget.user.id}> is not muted! try muting him then try unmuting him bruh.`);
                } else {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> Has been unmuted. Is that good or...?`);
                }

            } else {
                message.channel.send('Try that agin but this time actually mention an existing member of the server.');
            }
        } else {
            message.reply('Only admins get all the fun :(')
        }
    }
}