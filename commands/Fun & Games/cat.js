const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const { catApi } = require('../../config.json')

module.exports = {
  category: 'Fun & Games',
  description: 'Shows you an image of a cat!',
  cooldown: '5s',
  callback: async ({ message, interaction }) => {
    const apiKey = catApi;
    const res = await fetch('https://api.thecatapi.com/v1/images/search', { headers: { 'x-api-key': apiKey }});
    const img = (await res.json())[0].url;

    const embed = new MessageEmbed()
    .setTitle('🐱  Meow!  🐱')
    .setImage(img)
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send({embeds: [embed]});
  },
}