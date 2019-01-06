const client = require('../client.js');

module.exports = {
    name: 'ping',
    action: async (msg) => {
      const then = Date.now();
      const newmsg = await msg.channel.createMessage('Ping?');
      const diff = Date.now() - then;
      await newmsg.edit(`Pong! \`${diff}ms\``);
    },
    options: {
        description: 'Displays the bot\'s latency.',
        fullDescription: 'Sends a message and edits to, how long it takes is the latency.',
        aliases: [],
        usage: 'ping'
    }
};
