import { Collection } from "discord.js";

// In case you need any other collectors add them here
declare module "discord.js" {
  export interface Client {
    commands: Collection<unknown, Command>;
  }
}
