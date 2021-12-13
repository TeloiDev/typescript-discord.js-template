import { Command } from "discord.js";

// An example "ping" command. Replies with "pong!"
export const command: Command = {
  name: "ping",
  description: "replies with pong!",
  run: (message, args) => {
    message.channel.send("pong!");
  },
};
