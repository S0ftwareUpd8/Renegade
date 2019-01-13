const client = require('../client.js');

module.exports = {
    name: 'unban',
    action: async (msg, args, client) => {
        const toUnban = args[0];
        const thisUser = await client.getRESTUser(toUnban);
        const reason = args.splice(1).join(' ') ? reason : 'No reason provided.';

        try {
            await msg.channel.guild.unbanMember(toUnban, reason);
            msg.channel.createMessage(`<:tickYes:504014644269154331> Unbanned ${thisUser.tag}`);
        } catch (e) {
            msg.channel.createMessage('<:tickNo:504014629777833985> I can\'t find that user.');
        }
    },
    options: {
        description: 'Unbans a user',
        fullDescription: 'Unbans a user from the current server',
        aliases: ['appeal'],
        usage: '[snowflake] [optional reason]',
        requirements: {
            permissions: {
                kickMembers: true
            }
        }
    }
};