const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  category: 'Fun & Games',
  description: 'Shows you an image of a doggy :) !',
  cooldown: '5s',
  callback: async ({ message, interaction }) => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const img = (await res.json()).message;
    const embed = new MessageEmbed()
      .setTitle('🐶  Woof!  🐶')
      .setImage(img)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send({embeds: [embed]});
  },
}