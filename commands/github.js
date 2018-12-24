const client = require('../client.js');

module.exports = {
    name: 'github',
    action: async (msg, args) => {
        msg.channel.createMessage('You can view the GitHub repository here: https://github.com/S0ftwareUpd8/Renegade.git');
    },
    options: {
        'description': '',
        'fullDescription': '',
        'aliases': ['opensource', 'git', 'code', 'source']
    }
};
