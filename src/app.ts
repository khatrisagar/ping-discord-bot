import { Client, GatewayIntentBits } from "discord.js";
const client: any = new Client({ intents: [GatewayIntentBits.Guilds] });
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
