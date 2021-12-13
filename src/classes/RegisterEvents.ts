import { Client } from "discord.js";
import { readdirSync } from "fs";

export class RegisterEvents {
  constructor(Discord: unknown, client: Client) {
    const eventFiles = readdirSync(`${__dirname}/../events/`).filter((file) =>
      file.endsWith(".js")
    );

    for (const file of eventFiles) {
      const event = require(`${__dirname}/../events/${file}`);
      const eventName = file.split(".")[0];

      /*
        Listen for events. eventName is both NAME OF YOUR EVENT FILE and EVENT NAME.
        ! Keep them the same in order for it to work
      */
      client.on(eventName, event.bind(null, Discord, client));
    }
  }
}
