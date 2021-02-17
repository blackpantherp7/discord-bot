module.exports = {
  name: 'ping',
  description: "this is a ping command!",
  execute(message, args) {
    if (message.member.permissions.has('SEND_MESSAGES')) {
      message.channel.send('pong!');
    } else {
      message.channel.send("No one will be able to see this.. if u r able to, u have broken discord");
      message.member.roles.add('786471464412512256').catch(console.error);
    }

  }
}