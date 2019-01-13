const client = require('../client.js');

module.exports = {
    name: 'pin',
    action: async (msg, args, client) => {
        const thisMsg = await msg.channel.getMessage(args[0]);
        thisMsg.pin();
        msg.channel.createMessage(':ok_hand: Pinned ' + args[0]);
    },
    options: {
        description: 'Pins a message',
        fullDescription: 'Pins a message to the current channel',
        aliases: [],
        usage: '[snowflake]',
        requirements: {
            permissions: {
                manageMessages: true
            }
        }
    }
};