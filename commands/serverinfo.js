const client = require('../client.js');

module.exports = {
    name: 'serverinfo',
    action: async (msg, args) => {
        msg.channel.createMessage('This command is a work in progress.');
    },
    options: {
        description: 'Gets information about the server',
        fullDescription: 'Gets information about the current server',
        aliases: []
    }
}




// const client = require('../client.js');

// module.exports = {
//     name: '',
//     action: async (msg, args) => {
//         const thisServer = msg.channel.guild;
//         const embed = {
//             author: {
//                 name: thisServer.name,
//                 icon_url: thisServer.iconURL
//             },
//             description: 'Server Information',
//             fields: [
//                 {
//                     name: 'Server Owner',
//                     value: client.user.get(thisServer.ownerID).tag,
//                     inline: true
//                 },
//                 {
//                     name: 'Server Region',
//                     value: thisServer.region,
//                     inline: true
//                 },
//                 {
//                     name: 'Roles',
//                     value: ,
//                     inline: true
//                 },
//                 {
//                     name:,
//                     value:,
//                     inline: true
//                 }
//             ]
//         }
//     },
//     options: {
//         description: '',
//         fullDescription: '',
//         aliases: [],
//         usage: ''
//     }
// };