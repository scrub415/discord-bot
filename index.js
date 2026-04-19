const { Client, GatewayIntentBits } = require('discord.js');

console.log("SCRIPT STARTED");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = 'your_token_here';
const CHANNEL_ID = '1198699710035267648';

client.once('ready', async () => {
  console.log("READY EVENT FIRED");

  try {
    const channel = await client.channels.fetch(CHANNEL_ID);

    console.log("CHANNEL FOUND");

    const cron = require('node-cron');

cron.schedule('55 0 * * *', async () => {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    await channel.send('🚨 Arena 5 minute warning!');
    console.log('Message sent at 00:55');
  } catch (err) {
    console.error(err);
  }
});

    console.log("MESSAGE SENT");
  } catch (err) {
    console.error("ERROR:");
    console.error(err);
  }
});

client.login(TOKEN);