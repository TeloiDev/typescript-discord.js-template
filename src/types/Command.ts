import { Message } from "discord.js";

// If you need any other properities for a command add them here
declare module "discord.js" {
  export interface Command {
    name: string;
    description: string;
    run: (message: Message, args: string[]) => void;
  }
}
