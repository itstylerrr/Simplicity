const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Fun & Games',
    description: 'The 8Ball command gives you anwsers to your most difficult questions.',
    aliases: ['anwser', '🎱'],
    cooldown: '5s',
    callback: async ({ message, interaction, args }) => {
        const anwsers = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes - definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy, try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don\'t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.'
        ];
                const question = args.join(' ');
                if (!question) {
                    message.reply('Please provide a question.')
                    return;
                }
                const embed = new MessageEmbed()
                  .setTitle('🎱 The Magic 8-Ball 🎱')
                  .addField('Your Question', question)
                  .addField('Your Answer', `${anwsers[Math.floor(Math.random() * anwsers.length)]}`)
                  .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
                  .setTimestamp()
                  .setColor(message.guild.me.displayHexColor);
                message.channel.send( {embeds: [embed]} );
    }
}