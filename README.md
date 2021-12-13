# TypeScript discord.js template

This repo was made so everyone can easily start their discord.js bots with typescript!

<br/>

# Getting Started

In order to start with this template first you need to install this repo with `git clone typescript discord template` or just download it through GitHub. <br/>

Once you're done remove every .example from files' and directories' names and run `npm install`.

<br/>

## Customizing

The purpose of TypeScript is to strongly type your code so you need to set up everything in `types/` directory.

<br/>

### Comamand

This is the default state of Command interface. You can add any other properity that you need.

```ts
import { Message } from "discord.js";

// If you need any other properities for a command add them here
declare module "discord.js" {
  export interface Command {
    name: string;
    description: string;
    isTypescriptFun: boolean;
    expectedArgsAmount: number;
    // etc.
    run: (message: Message, args: string[]) => void;
  }
}
```

<br/>

### Client

Same aplies to Client class. This is it's default state and here's how you can change it to your needs.

```ts
import { Collection } from "discord.js";

// In case you need any other collectors add them here
declare module "discord.js" {
  export interface Client {
    commands: Collection<unknown, Command>;
    aliases: Collection<unknown, any>; // Using any should be a final decission and you shouldn't use it unless it's necessary
  }
}
```

<br/>

### .env and basic setup

I don't think I have to explain this. Just modify it so you can actually use the bot

env:

```env
DISCORD_TOKEN=your discord bot token
```

You can find your bot's prefix in `messageCreate.ts` file.

<br/>

## Adding new Commands and Events

### Events

Remember to name your event files same as the actual event's name.

Example: if an event is called "messageDelete" name a your file "messageDelete.ts" etc.

<br/>

### Command

Pretty straightforward. Just make sure that every command has a unique name.

<br/>

# Contributing

As always every contributions is welcome. For major changes open an issue first and describe what you want to change