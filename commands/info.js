const client = require('../client.js');

module.exports = {
  name: 'info',
  action: (msg) => {
    msg.channel.sendTyping();

    const embed = {
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      description: 'This bot uses [Moonglow](https://github.com/FCCouncil/Moonglow/tree/eris)\'s framework.',
      fields: [
        {
          name: 'Version',
          value: '0.1.0',
          inline: true
        },
        {
          name: 'Created At',
          value: new Date(client.user.createdAt).toLocaleString('en-us'),
          inline: true
        },
        {
          name: 'Library',
          value: '[Eris](https://github.com/abalabahaha/eris)',
          inline: true
        },
        {
          name: 'Language',
          value: 'TypeScript',
          inline: true
        },
        {
          name: 'Contributors',
          value: 'Dutch van der Linde#0001, TheSkele27#1337',
          inline: false
        },
        {
          name: 'Developers',
          value: 'S0ftwareUpd8#9999',
          inline: false
        },
        {
          name: 'Support Server',
          value: '[discord.gg/renegade](https://discord.gg/ZHwZhDE)',
          inline: false
        }
      ],
      timestamp: new Date(msg.createdAt),
      footer: {
        text: client.user.username,
        icon_url: client.user.avatarURL
      }
    };
    msg.channel.createMessage({ embed });
  }, 
  options: {
    description: 'Gets information about the bot',
    fullDescription: 'Provdes information about the bot, such as developers, contributers, hosting information, uptime, server count, and more.',
    aliases: ['about', 'botinfo'],
    usage: 'info'
  }
};
