const client = require('../client.js');

module.exports = {
    name: 'setgame',
    action: async (msg, args, client) => {
        let thisGame = args.join(' ') || null;
        
        client.editStatus({name: thisGame}).catch(console.error);
        msg.channel.createMessage('Edited game to ' + thisGame)
    },
    options: {
        description: 'Sets the bot\'s game.',
        fullDescription: 'Sets the bot\'s playing status',
        aliases: [],
        usage: 'setgame [string]',
        requirements: {
            userIDs: ['425023068004548618']
        }
    }
};