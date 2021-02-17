module.exports = {
    name: 'help',
    description: 'shows all the commands',
    execute(message, args, Discord) {
        const embed = new Discord.MessageEmbed()
            .setColor('#ec4646')
            .setTitle('List of commands')
            .setDescription('The prefix for this server is `~`')
            .addFields(
                { name: 'help', value: 'Shows this!', },
                { name: 'hi', value: 'Tells Hi!' },
                { name: 'ping', value: 'Pings you ig' },
                { name: 'mute', value: 'mutes the person mentioned. Syntax: ~mute <user mentioned>' },
                { name: 'unmute', value: 'unmutes the person mentioned. Syntax: ~unmute <user mentioned>' },
                { name: 'bye', value: 'Tells you bye...' },
                { name: 'clear', value: 'Clears a certain amount of messages. Syntax: ~clear <amount of messages>' },
                { name: 'kick', value: 'Kicks the idiot who was to be kicked. Syntax: ~kick <user mentioned>' },
                { name: 'ban', value: 'bans the idiot who was to be banned. Syntax: ~ban <user mentioned>' }
            )
            .setImage('https://i.imgur.com/N3ihgq8.png')
            .setFooter('Be informed that this bot is still under devolopment and more features will be included shortly ;)')

        message.channel.send(embed);
    }

}