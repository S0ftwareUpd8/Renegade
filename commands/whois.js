const client = require('../client.js');
/*const status = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do Not Disturb',
  offline: 'Offline/Invisible'
};*/

function checkUserPermission(botuser, msg) {
  const arrayOfPerms = [];
  if (msg.channel.guild.ownerID === botuser.id) {
    arrayOfPerms.push('Owner');
  }
  if (botuser.permission.has('administrator')) {
    arrayOfPerms.push('Administrator');
  }
  if (botuser.permission.has('manageGuild')) {
    arrayOfPerms.push('Manage Server');
  }
  if (botuser.permission.has('manageRoles')) {
    arrayOfPerms.push('Manage Roles');
  }
  if (botuser.permission.has('manageChannels')) {
    arrayOfPerms.push('Manage Channels');
  }
  if (botuser.permission.has('viewAuditLogs')) {
    arrayOfPerms.push('View Audit Logs');
  }
  if (botuser.permission.has('kickMembers')) {
    arrayOfPerms.push('Kick Members');
  }
  if (botuser.permission.has('banMembers')) {
    arrayOfPerms.push('Ban Members');
  }
  if (botuser.permission.has('manageNicknames')) {
    arrayOfPerms.push('Manage Nicknames');
  }
  if (botuser.permission.has('manageEmojis')) {
    arrayOfPerms.push('Manage Emojis');
  }
  if (botuser.permission.has('manageWebhooks')) {
    arrayOfPerms.push('Manage Webhooks');
  }
  if (botuser.permission.has('manageMessages')) {
    arrayOfPerms.push('Manage Messages');
  }
  if (botuser.permission.has('mentionEveryone')) {
    arrayOfPerms.push('Mention Everyone');
  }
  return arrayOfPerms;
}

function staffFunction(botuser) {
  const staffArray = [];

  if (botuser.id === '') {
    staffArray.push('Founder & Creator');
  }
  if (['425023068004548618'].indexOf(botuser.id) >= 0) {
    staffArray.push('Developer');
  }
  if ([].indexOf(botuser.id) > 0) {
    staffArray.push('Community Administrator');
  }
  if ([].indexOf(botuser.id) > 0) {
    staffArray.push('Support & Assistance');
  }
  if (['278620217221971968'].indexOf(botuser.id) >= 0) {
    staffArray.push('Contributor');
  }

  return staffArray;
}

module.exports = {
  name: 'whois',
  action: (msg, args) => {
    const resolvedUser = (args[0] !== undefined) ? msg.channel.guild.members.get(args[0].match(/[0-9]/g).join('')) : null;
    const botuser = resolvedUser ? msg.channel.guild.members.get(resolvedUser.id) : msg.member;
    /*let bot = '';
    if (botuser.bot === true) {
      bot = 'Yes';
    } else {
      bot = 'No';
    }*/

    const millisJoined = new Date().getTime() - new Date(botuser.joinedAt).getTime();
    const dj = millisJoined / 1000 / 60 / 60 / 24;

    const joinPosition1 = msg.channel.guild.members.map(i => i).sort((a, b) => a.joinedAt - b.joinedAt).indexOf(botuser);

    let aPerms = 'none';
    if (botuser.permission.has('manageGuild')) {
      aPerms = 'Server Manager';
    }
    if (botuser.permission.has('administrator')) {
      aPerms = 'Server Administrator';
    }
    if (botuser.id === msg.channel.guild.ownerID) {
      aPerms = 'Server Owner';
    }
    const joinPosition3 = joinPosition1 + 1;

    const gameName = botuser.game ? botuser.game.name : 'Unspecified';

    const fields = [
      {
        name: 'Joined Server At',
        value: `${new Date (botuser.joinedAt).toLocaleString('en-US')} | ${dj.toFixed(0)} Days Ago`,
        inline: true
      },
      {
        name: 'Join Position',
        value: joinPosition3,
        inline: false
      },
      {
        name: 'Created Account At',
        value: new Date(botuser.createdAt).toLocaleString('en-us'),
        inline: true
      },
      {
        name: 'Playing',
        value: gameName,
        inline: true
      },
      {
        name: `Roles [${botuser.roles.length}]`,
        value: botuser.roles.length > 0 ? botuser.roles.map(i => msg.channel.guild.roles.get(i)).map(i => i.mention).join(', ') : 'No Roles',
        inline: false
      }
    ];

    if (checkUserPermission(botuser, msg).length) {
      fields.push({
        name: 'Key Permissions',
        value: `${checkUserPermission(botuser, msg).join(', ')}`,
        inline: true
      });
    }
    if (aPerms !== 'none') {
      fields.push({
        name: 'Acknowledgements',
        value: `${aPerms}`,
        inline: true
      });
    }
    if (staffFunction(botuser).length) {
      fields.push({
        name: 'Renegade Team',
        value: `${staffFunction(botuser).join(', ')}`,
        inline: true
      });
    }

    let highestRole;
    if (botuser.roles.length <= 0) {
      highestRole === 0xFF0000;
    } else {
      highestRole = botuser.roles.map(i => msg.channel.guild.roles.get(i)).filter(i => i.color).sort(function(a,b) { return b.position - a.position})[0].color;
    }

    const embed = {
      author: {
        name: botuser.username,
        icon_url: botuser.avatarURL
      },
      thumbnail: {
        url: botuser.avatarURL
      },
      fields: fields,
      color: highestRole,
      timestamp: new Date(msg.createdAt),
      footer: {
        text: `${client.user.username} | User ID: ${botuser.id}`,
        icon_url: client.user.avatarURL
      }
    };

    //console.log(embed);
    msg.channel.createMessage({ embed });

  },
  options: {
    description: 'Gets a specified user\'s information.',
    fullDescription: 'Gets info on the specified user',
    aliases: [],
    usage: '[user | snowflake]'
  }
};
