import { Client, Command, Message } from "discord.js";
import Module from "module";

const prefix = "!"; // Example Prefix

export = (Discord: Module, client: Client, message: Message): void => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift()?.toLowerCase();

  const command = client.commands.get(cmd);

  try {
    command?.run(message, args);
  } catch (e) {
    console.error(e);
  }
};
