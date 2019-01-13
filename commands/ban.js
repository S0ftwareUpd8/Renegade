const client = require('../client.js');

module.exports = {
    name: 'ban',
    action: async (msg, args) => {
      const thisUser = msg.channel.guild.members.get(args[0]) || msg.channel.guild.members.get(msg.mentions[0].id);
      const thisReason = args.splice(1).join(' ') ? thisReason : 'No reason provided.';
      if (!thisUser) return msg.channel.createMessage('I can\'t find that user.');
      if (!thisUser.permission.has('manageMessages')) return msg.channel.createMessage('<:tickNo:504014629777833985> That user is a moderator, I can\'t do that.');
      if (!msg.channel.guild.members.get(client.user.id).permission.has('banMembers')) return msg.channel.createMessage('<:tickNo:504014629777833985> I don\'t have the ban members permission, please check my roles and try again.');
      try {
        await msg.channel.guild.banMember(thisUser.user.id, 2, thisReason)
        msg.channel.createMessage(`<:tickYes:504014644269154331> Banned ${client.getRESTUser(thisUser.user.id).tag}`);
      } catch (e) {
        if (e.name === 'DiscordRESTError' && e.message === 'Missing Permissions' || e.name === 'DiscordAPIError' && e.message === 'Missing Permissions') {
          msg.channel.createMessage('<:tickNo:504014629777833985> I don\'t have permissions to do that, please check my roles and try again.');
        } else {
          msg.channel.createMessage('<:tickNo:504014629777833985> An error occured, please check my roles and try again.');
          console.log(e.stack) // logging the entire error just so I know if its something up with the actual code and not the bot's perms.
        }
      }
    },
    options: {
        description: 'Bans a user from the server',
        fullDescription: 'Bans a user from the current server by ID or mention',
        aliases: [],
        usage: '[user | snowflake] [reason]',
        requirements: {
          permissions: {
            banMembers: true
        }
      }
    }
};
