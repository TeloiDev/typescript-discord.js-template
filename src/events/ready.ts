import { Client } from "discord.js";
import Module from "module";

export = (Discord: Module, client: Client) => {
  process.stdout.write(`Logged in as ${client?.user?.tag}\n`);
};
