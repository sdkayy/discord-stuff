/*
  This is a pretty basic boilerplate for some useful events that could make a helpful discord bot.
*/
const Discord = require("discord.js");
const client = new Discord.Client();

// This code is for my use, feel free to remove.
const { secretKey } = require("../secrets.js");

client.on("ready", () => {
  // Client is ready to be used and is online.
});

// Checkout more events @ https://discord.js.org/#/docs/main/stable/class/Client
client.on("message", msg => {
  // Client recieved a message object from someone.
});

client.on("guildBanAdd", (guild, member) => {
  // User was banned, feel free to announce it.
});

client.on("guildBanRemoved", (guild, member) => {
  // User was unbanned, he is back watch out!
});

client.on("messageDelete", msg => {
  // Looks like someone deleted a message, lets keep that message in our internal database for record maybe?
});

client.on("messageReactionAdd", (reaction, user) => {
  // Good for knowing when a user added a reaction, like those reaction verify that you are human bots.
});

client.on("messageUpdate", (oldMsg, newMsg) => {
  // Someone edited a message lets take a peek and keep it for our records just incase.
});

// Log the client in using your bot token from the developer panel
client.login(secretKey);
