const client = require('../client.js');

module.exports = {
    name: 'softban',
    action: async (msg, args) => {
        const thisUser = msg.channel.guild.members.get(args[0]) || msg.channel.guild.members.get(msg.mentions[0].id);
          if (!thisUser) return;
        const thisReason = args.splice(1).join(' ');
        try {
            await msg.channel.guild.banMember(thisUser.user.id, 7, thisReason);
            await msg.channel.guild.unbanMember(thisUser.user.id, 'Ban was a softban');
            msg.channel.createMessage(`<:tickYes:504014644269154331> Softbanned ${client.getRESTUser(thisUser.id).tag}`);
        } catch (e) {
            if (e.name === 'DiscordRESTError' && e.message === 'Missing permissions') {
                msg.channel.createMessage('<:tickNo:504014629777833985> I don\'t have permission to do that, please check my roles and try again.');
            } else {
                msg.channel.createMessage('<:tickNo:504014629777833985> An error occured, please check my roles and try again.');
            }
        }
    },
    options: {
        description: 'Bans a user and unbans them',
        fullDescription: 'Bans and unbans a user for deleting messages',
        aliases: [],
        usage: '[user] [reason]',
        requirements: {
            permissions: {
                banMembers: true
            }
        }
    }
};