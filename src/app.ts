import { Client, GatewayIntentBits } from "discord.js";
import axios from "axios";
import express from "express";
const client: any = new Client({ intents: [GatewayIntentBits.Guilds] });
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const app = express();
app.get("/ping", async (req, res) => {
  await axios.get(`${process.env.BACKEND_URL}`);
  console.log("pinged");
});

setInterval(async () => {
  try {
    await axios.get(`${process.env.BACKEND_URL}`);
    console.log("pinged");
  } catch (error) {
    console.log("error", error);
  }
}, 598888);

app.listen(9999);
client.login(process.env.DISCORD_TOKEN);
