/* 
 * This code simply takes a command (*>play https://youtu.be/s0hMu9FUjmk) and will play the song via the bot. 
 * This bot uses ytdl to get the stream from youtube
 */
const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");

// This code is for my use, feel free to remove.
const { secretKey } = require("../secrets.js");

client.on("ready", () => {
  console.log(`Bot is ready`);
});

client.on("message", async msg => {
  // Check if guild, only works on guilds (servers)
  if (!msg.guild) return;
  // Change this out for your command prefix and the command you want.
  if (msg.content.includes("*>play")) {
    // Check if the user is in a channel
    if (msg.member.voiceChannelID) {
      // Might want to add some other validation here to make sure its a YT link etc.
      const connection = await client.channels
        .get(msg.member.voiceChannelID)
        .join();
      // Set stream otions, extrem distortion you say??? volume 100
      var streamOptions = { seek: 0, volume: 1 };
      // Replace the command so we are left with just the youtube hopefully. and put an audo only filter on it.
      var stream = ytdl(msg.content.replace("*>play ", ""), {
        filter: "audioonly"
      });
      // Hook in our stream options and stream object
      var dispatcher = connection.playStream(stream, streamOptions);
      // On end we want to go away duh.
      dispatcher.on("end", () => connection.disconnect());
    } else {
      msg.reply("You need to join a voice channel first!");
    }
  }
});

// Log the client in using your bot token from the developer panel
client.login(secretKey);
