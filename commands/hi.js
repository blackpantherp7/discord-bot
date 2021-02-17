module.exports = {
  name: 'hi',
  description: "this is a hi command!",
  execute(message, args) {

    if (message.member.permissions.has('SEND_MESSAGES')) {
      message.channel.send('Hi!');
    } else {
      message.channel.send("I see you dont have the right role to use me... gimme a sec Ill give you it");
      message.member.roles.add('786471464412512256').catch(console.error);
    }
  }
}