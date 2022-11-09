const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("../config.json");
const { isInquiry, parseOpts } = require("./text_proc");

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const content = message.content;

  if (!isInquiry(content)) return;

  console.log(parseOpts(content))

  message.channel.send(parseOpts(content)?.toString());
});
// Log in to Discord with your client's token
client.login(token);
