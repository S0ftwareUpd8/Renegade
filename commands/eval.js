const client = require('../client.js');
const util = require('util');

module.exports = {
  name: 'eval',
  action: async (msg, args) => {
    function globalban(user, reason) {
      client.guilds.forEach((m) => {
        m.banMember(user, reason);
      });
    }
    const code = args.join(' ');
    if (code === 'client.token') return msg.channel.createMessage('```undefined```');
    let evaled;

    try {
      evaled = await eval(code);
      if (typeof evaled === 'object') {
        evaled = util.inspect(evaled, {
          depth: 0
        });
      }
    } catch (err) {
      return msg.channel.createMessage(`\`\`\`xl\n${err}\`\`\``);
    }


    if (evaled == undefined) {
      evaled = 'undefined';
    }

    if (evaled == 'undefned') {
      evaled = 'undefined';
    }

    if (evaled.length > 1900) {
      evaled = 'Response too large';
    }

    return msg.channel.createMessage(`\`\`\`js\n${evaled}\`\`\``);
  },

  options: {
    description: 'Evaluates JavaScript code.',
    fullDescription: 'Evaluates js code from Discord',
    aliases: ['e'],
    cooldown: 0,
    hidden: true,
    requirements: {
      userIDs: ['425023068004548618', '213632190557192192']
    }
  }
};
