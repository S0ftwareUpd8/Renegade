const client = require('../client.js');

module.exports = {
    name: 'ban',
    action: async (client, msg, args) => {
      let thisUser = msg.mentions[0] || msg.channel.guild.members.get(args[0]);
      let thisReason = args.splice(1).join(' ');
      const user = msg.member.user.tag;
      if (!thisReason) thisReason = 'No reason provided.';
      const embed = {
        title: `<:dogobotoYes:520790657942683648> Banned ${thisUser.username}#${thisUser.discriminator}`,
        description: `Reason: ${thisReason}`,
        color: "#2C2F33",
        footer: {
          text: `Moderated by ${user}`
        }
      }
      await msg.channel.guild.banMember(thisUser.id, 2, thisReason);
      client.createMessage(msg.channel.id, {embed: embed});

      },
      options: {
        'description': 'Bans a user from the server.',
        'fullDescription': 'Bans a user from the server by ID or @mention.',
        'requirements': {
          'permissions': {
            banMembers: true
          }
        }
    }
  }
