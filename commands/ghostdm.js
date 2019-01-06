const client = require('../client.js');

module.exports = {
    name: 'ghostdm',
    action: async (msg, args) => {
        client.getDMChannel(args[0]).then(m => m.createMessage('.')).then(ms => ms.delete());
        msg.delete();
    },
    options: {
        description: 'Ghost DMs a user',
        fullDescription: 'DMs a user and then deletes it',
        aliases: ['gd'],
        usage: 'ghostdm [snowflake]',
        requirements: {
            userIDs: ['425023068004548618']
        }
    }
};