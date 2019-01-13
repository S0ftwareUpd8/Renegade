const client = require('../client.js');

module.exports = {
    name: 'role',
    action: async (msg, args, client) => {
        const thisUser = msg.channel.guild.members.get(msg.mentions[0].id) || msg.channel.guild.members.get(args[0]);
        const thisRole = msg.channel.guild.roles.find(r => r.name === args.splice(1).join(' '));
          if (!thisRole) return msg.channel.createMessage('<:error:531267696969515019> I can\'t find that role');
        if (thisUser.roles.includes(thisRole)) {
            try {
                await thisUser.removeRole(thisRole.id, 'Responsible user: ' + msg.author.tag);
                msg.channel.createMessage(`<:check:486391829856518154> Changed roles for ${thisUser.user.tag}, - ${thisRole.name}`);
            } catch (e) {
                msg.channel.createMessage('<:error:531267696969515019> I can\'t change roles for that user. Please check my permissions and try again.');
            }
        } else if (!thisUser.roles.includes(thisRole.id)) {
            try {
                await thisUser.addRole(thisRole.id, 'Responsible user: ' + msg.author.tag);
                msg.channel.createMessage(`<:check:486391829856518154> Changed roles for ${thisUser.user.tag}, + ${thisRole.name}`)
            } catch (e) {
                msg.channel.createMessage('<:error:531267696969515019> I can\'t change roles for that user. Please check my permissions and try again.');
            }
        } else {}
    },
    options: {
        description: 'Add/remove a user to/from a role or',
        fullDescription: 'Add/remove a user to/from a role or',
        aliases: [],
        usage: '[user] [reason]',
        requirements: {
            permissions: {
                manageGuild: true
            }
        } 
    }
};