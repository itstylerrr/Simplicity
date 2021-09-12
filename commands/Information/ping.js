const { MessageEmbed } = require('discord.js')

module.exports = {
  category: 'Information',
  description: 'Replies with latency, and api latency.',
  callback: async ({ message, interaction }) => {
const embed = new MessageEmbed()
    .setDescription('`Pinging...`')
    .setColor('RED');
const msg = await message.channel.send({ embeds: [embed] });
const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp; 
const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;
embed.setTitle(`Pong! 📶`)
    .setDescription('')
    .addField('Latency', latency, true)
    .addField('API Latency', apiLatency, true)
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor('GREEN');
    msg.edit({ embeds: [embed] });
  },
}