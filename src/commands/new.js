const { Command } = require("@oclif/command");
const path = require("path");

const { execSync } = require("child_process");

class NewCommand extends Command {
  async run() {
    const {
      args: { name },
    } = this.parse(NewCommand);

    const src = path.resolve(__dirname, "../../template");
    const dest = path.resolve(process.cwd(), name);
    execSync(`cp -r ${src} ${dest}`, { encoding: "utf-8" });

    this.log(`Project ${name} has been created`);
  }
}

NewCommand.description = "create new project";

NewCommand.args = [
  {
    name: "name",
    description: "name of the application to create",
    required: true,
  },
];

module.exports = NewCommand;
