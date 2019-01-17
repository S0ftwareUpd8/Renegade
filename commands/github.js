const client = require('../client.js');

module.exports = {
    name: 'github',
    action: async (msg, args) => {
        msg.channel.createMessage('You can view the GitHub repository here: https://github.com/S0ftwareUpd8/Renegade.git');
    },
    options: {
        description: 'Gets a link to Renegade\'s GitHub repository',
        fullDescription: 'Provides a link to Renegade\'s code.',
        aliases: ['opensource', 'git', 'code', 'source'],
        usage: ''
    }
};
