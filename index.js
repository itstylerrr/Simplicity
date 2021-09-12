console.clear();
const DiscordJS = require("discord.js");
const WOKCommands = require("wokcommands");
const path = require("path");
const config = require("./config.json");
var colors = require("colors");

colors.setTheme({
  bot: "cyan",
  mongo: "green",
  warn: "yellow",
  error: "red",
});

const { Intents } = DiscordJS;
const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on("ready", () => {
  console.log("-BOT-".bot, "Simplicity is updated to the latest version ✅");
  console.log("-BOT-".bot, "Simplicity is loading commands 🔃");
  console.log("-MONGO-".mongo, "Simplicity is commecting to mongo 🔃");
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    messagesPath: "",
    showWarns: true,
    delErrMsgCooldown: 10,
    defaultLangauge: "english",
    ignoreBots: false,
    dbOptions: {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    testServers: ["866487944898281502"],
    disabledDefaultCommands: [],
    mongoUri: config.mongoUri,
  })
    .setDefaultPrefix("$")
    .setColor("WHITE")
    .setCategorySettings([
      {
        name: "Fun & Games",
        emoji: "🎮",
      },
      {
        name: "Economy",
        emoji: "💸",
      },
      {
        name: "Testing",
        emoji: "⚠",
      },
      {
        name: "Information",
        emoji: "ℹ",
      },
    ]);
  console.log("-MONGO-".mongo, "Simplicity has connected to mongo ✅");
  console.log("-BOT-".bot, "Simplicity has loaded all commands ✅");
  console.log();
  console.log("-BOT-".bot, "Simplicity is ready ✅");
});

client.on('guildDelete', guild => {
  let servericon = guild.iconURL();
	const guildDel = new DiscordJS.MessageEmbed()
    .setAuthor(`@Simplicity has left ${guild.name} 🚫`, servericon)
    .setColor("RED")
    .setTimestamp();
    let mainguild = client.guilds.cache.get('866487944898281502');
    if (mainguild) {
        channel = mainguild.channels.cache.get('886741127951171644');
        if (channel) {
            channel.send({embeds: [guildDel]})
        }
    }

});

client.on('guildCreate', guild => {

	let servericon = guild.iconURL();
    const guildAdd = new DiscordJS.MessageEmbed()
        .setAuthor(`@Simplicity has joined ${guild.name} ✅`, servericon)
        .addField(`Total Members`, `**${client.guilds.cache.reduce((x, guild) => x + guild.memberCount, 0)}** members!`)
        .setColor("#65db7b")
        .setTimestamp();

    let mainguild = client.guilds.cache.get('866487944898281502');
    if (mainguild) {
        channel = mainguild.channels.cache.get('886741127951171644');
        if (channel) {
            channel.send({embeds: [guildAdd]})
        }
    }

});
client.login(config.TOKEN);
