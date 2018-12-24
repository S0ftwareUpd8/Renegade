if (Number(process.version.slice(1).split('.')[0]) < 8)
  throw new RangeError('Node 8.0.0 or higher is required. Update Node on your system.');

// const enmap = require('enmap');
const eris = require('eris');
const config = require('./config.json');


const client = new eris.CommandClient(config.token, {
  autoreconnect: true,
  getAllUsers: false,
  restMode: true,
  defaultImageFormat: 'png'
}, {
  defaultHelpCommand: true,
  name: 'Renegade on Eris',
  owner: 'S0ftwareUpd8#9999',
  prefix: ['r.', '@mention ', '!'],
  defaultCommandOptions: {
    permissionMessage: 'You don\'t have permissions to run this command.',
    cooldown: 2000,
    cooldownMessage: 'You\'re being rate-limited!'
  }
});

// client.premium = new enmap({
//   name: 'premium',
//   autofetch: true
// })


// process.on('uncaughtException', (err) = {
//   const errorMsg = er.stack
//   console.log(`Uncaught Exception Error: ${errorMsg}`);
//   process.exit(1);
// });

process.on('unhandledRejection', err => {
  console.log(`Unhandled Rejection Error: ${err.stack}`);
});

module.exports = client;
