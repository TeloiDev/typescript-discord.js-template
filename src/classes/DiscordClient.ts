import Discord, { Client, Intents, Collection } from "discord.js";
import { RegisterCommands } from "./RegisterCommands";
import { RegisterEvents } from "./RegisterEvents";
import { stdout } from "process";
import { readdirSync } from "fs";

export class DiscordClient {
  private client: Client;
  constructor() {
    this.client = new Client({
      intents: [
        /* Learn more at https://discordjs.guide/popular-topics/intents.html#enabling-intents */
      ],
    });
    this.client.commands = new Collection();
  }

  public start(): void {
    const start = performance.now();
    stdout.write("- Client | Starting process...\n");

    const commandDirs = readdirSync(`${__dirname}/../commands/`);

    // Register all commands and events
    new RegisterCommands(commandDirs, this.client);
    new RegisterEvents(Discord, this.client);

    stdout.write(JSON.stringify(this.client) + "\n");

    // Parse ENV values
    require("dotenv").config();
    this.client.login(process.env.DISCORD_TOKEN);

    const end = performance.now();
    stdout.write(`- Client | Process ended in ${end - start} seconds\n`);
  }
}
