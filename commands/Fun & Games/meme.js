const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  category: 'Fun & Games',
  description: 'Shows a random meme from the memes, dankmemes, or me_irl subreddits.',
  cooldown: '5s',
  callback: async ({ message, interaction }) => {
    let res = await fetch('https://meme-api.herokuapp.com/gimme');
    res = await res.json();
    const embed = new MessageEmbed()
        .setAuthor(`Subreddit: ${res.title}`)
        .setTitle(`🤣 Meme 🤣`)
        .setImage(res.url)
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
    message.channel.send({embeds: [embed]});
  },
}