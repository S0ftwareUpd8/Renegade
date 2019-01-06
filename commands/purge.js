const client = require('../client.js');

module.exports = {
    name: 'purge',
    action: async (msg, args, client) => {
        await msg.delete();
        msg.channel.purge(args[0]).then( ()=> {} );
        const m = await msg.channel.createMessage(`Deleted ${args[0]} messages.`);
        setTimeout(()=> {
            m.delete();
        }, 1000);
    },
    options: {
        description: 'Bulk deletes messsages from a channel',
        fullDescription: 'Bulk deletes the specified number of messages from a channel',
        aliases: ['clear', 'prune', 'clean'],
        usage: 'purge [number]',
        requirements: {
            permissions: {
                manageMessages: true
            }
        }
    }
};
