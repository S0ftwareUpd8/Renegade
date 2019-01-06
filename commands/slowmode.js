//const client = require('../client.js');
const axios = require ('axios');
const config = require('../config.json');

function slowmode(msg, args, s, m) {
  msg.channel.sendTyping();
  axios({
    method: 'patch',
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    headers: {
      'Authorization' : `Bot ${config.token}`
    },
    data: {
      rate_limit_per_user: s,
      reason: args.slice(1).join(' ')
    }
  })
    .then(() => msg.channel.createMessage(m))
    .catch(() => {
      return msg.channel.createMessage('I don\'t have permission to perform this action');
    });
}

module.exports = {
  name: 'slowmode',
  action: (msg, args) => {        
    if (args[0] === 'off') {
      slowmode(msg, args, 0, 'Disabled slowmode');
    } else if (isNaN(args[0]) || parseInt(args[0]) > 120 || parseInt(args[0]) < 1) {
      return msg.channel.createMessage('Invalid usage');
    } else {
      return slowmode(msg, args, args[0], `***Slowmode is enabled in this channel for ${args[0]} seconds.***`);
    }
  }, options: {
    description: 'Enables slowmode in the channel the command is used in.',
    fullDescription: 'Enables slowmode in the channel',
    aliases: [],
    usage: 'slowmode [...# of seconds] || slowmode off; [...reason]',
    requirements: {
        permissions: {
            manageMessages: true
        }
    }
  }
};