module.exports = {
    name: 'clear',
    description: 'clears all messages till specified number',
    async execute(message, args) {
        if (!args[0]) return message.channel.send('Do you want me to delete the whole message history? I dont think so.. enter a value man');
        if (isNaN(args[0])) return message.reply('Bruh enter a number and not some random text');

        if (args[0] > 100) return message.reply("I ain't god man though I like to think so... enter a number lesser than 100");
        if (args[0] < 1) return message.reply("I cant delete 0 messages bruh");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}