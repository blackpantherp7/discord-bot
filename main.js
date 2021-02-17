const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEl", "REACTION"] });

const prefix = '~';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Lithium is online!');
});

client.on('guildMemberAdd', guildMember => {
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.find(channel => channel.name === 'welcome').send(`Sup' <@${guildMember.user.id}>? wecome to this server!`)
})

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  } else if (command === 'hi') {
    client.commands.get('hi').execute(message, args);
  } else if (command === 'mute') {
    client.commands.get('mute').execute(message, args);
  } else if (command === 'unmute') {
    client.commands.get('unmute').execute(message, args);
  } else if (command === 'bye') {
    message.channel.send('Bye!');
  } else if (command === 'help') {
    client.commands.get('help').execute(message, args, Discord);
  } else if (command === 'clear') {
    client.commands.get('clear').execute(message, args);
  } else if (command === 'kick') {
    client.commands.get('kick').execute(message, args);
  } else if (command === 'ban') {
    client.commands.get('ban').execute(message, args);
  } else if (command === 'reactionrole') {
    client.commands.get('reactionrole').execute(message, args, Discord, client);
  }
});

client.login('ODA5NjI2NjE3Mjc3MzE3MTcw.YCX1iw.nzGojKsafJqNrMfnVIUpQJqDHA4');

//ODA5NjI2NjE3Mjc3MzE3MTcw.YCX1iw.nzGojKsafJqNrMfnVIUpQJqDHA4