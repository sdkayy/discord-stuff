const Discord = require("discord.js");
const client = new Discord.Client();

let currentRoleId = "",
  currentRole = null;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => {
    if (currentRoleId !== "") {
      currentRole.setColor(getRandomColor());
    }
  }, 125);
});

client.on("message", msg => {
  if (msg.content.includes("!role")) {
    currentRoleId = msg.content.split(" ")[1];
    currentRoleId = currentRoleId.split("&")[1].split(">")[0];
    currentRole = msg.guild.roles.get(currentRoleId);
    msg.reply("Set current rainbow role!");
  }
});

client.login("NDIyOTc1Nzc0MTU3NDM4OTg2.DrkJVA.da3YMHtcViEYwkEji5z-I-xFJEc");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
