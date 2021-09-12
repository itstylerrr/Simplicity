const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  category: 'Fun & Games',
  description: 'Shows you an image of a birdy!',
  cooldown: '5s',
  callback: async ({ message, interaction }) => {
    const res = await fetch('http://shibe.online/api/birds');
    const img = (await res.json())[0];
    const embed = new MessageEmbed()
      .setTitle('🐦  Chirp!  🐦')
      .setImage(img)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send({embeds: [embed]});
  },
}