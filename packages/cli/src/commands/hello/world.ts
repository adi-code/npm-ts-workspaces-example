import { Command } from "@oclif/core";
import { world } from "@myworkspace/core/src/world";

export default class World extends Command {
  static description = "Say hello world";

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    this.log("hello world! (./src/commands/hello/world.ts)");
    this.log(world());
  }
}
