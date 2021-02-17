const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'this mutes the person mentioned',
    execute(message, args) {
        const target = message.mentions.users.first();
        if (message.member.permissions.has('ADMINISTRATOR')) {
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> just shut up man you are annoying them`);
                    return
                }

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> just shut up man you are annoying them. Ayy u have been muted only for ${ms(ms(args[1]))}`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> Listen to mods from next time hey let u go ez this time`);
                }, ms(args[1]));
            } else {
                message.channel.send('Try that agin but this time actually mention an existing member of the server.');
            }
        } else {
            message.reply('Only admins get all the fun :(')
        }
    }
}