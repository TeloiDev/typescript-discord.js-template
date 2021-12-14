import { Client, Command } from "discord.js";
import { readdirSync } from "fs";

export class RegisterCommands {
  constructor(dirs: string[], public client: Client) {
    // Load each directory
    dirs.forEach((dir) => this.loadDir(dir));
  }

  private loadDir(dir: string): void {
    const commandFiles = readdirSync(`${__dirname}/../commands/${dir}`).filter((file) =>
      file.endsWith(".js")
    );

    for (const file of commandFiles) {
      const command: Command = require(`${__dirname}/../commands/${dir}/${file}`);

      if (command.name) {
        this.client.commands.set(command.name, command);
      } else {
        continue;
      }
    }
  }
}
