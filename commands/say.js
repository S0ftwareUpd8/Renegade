const client = require('../client.js');

module.exports = {
    name: 'say',
    action: async (msg, args, client) => {
        let thisMsg = args.join(' ');
        if (thisMsg.includes('--nd')) {
            thisMsg = thisMsg.split(' ');
            msg.channel.createMessage(thisMsg[0]);
        } else {
            msg.channel.createMessage(thisMsg);
            msg.delete();
        }
    },
    options: {
        description: 'Says whatever you say as the bot',
        fullDescription: 'Says whatever you say as the bot',
        aliases: [],
        usage: '[msg] (--nd)',
        requirements: {
            permissions: {
                manageMessages: true
            }
        }
    }
};