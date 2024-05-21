#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.error(`\n\nFailed to execute ${command}`, e);
    return false;
  }
  return true;
};
const repoName = process.argv[2];
console.log(`\nWelcome to`)
console.log(`

████████╗██╗░░░██╗██████╗░██████╗░░█████╗░░█████╗░███████╗██╗░░░░░██╗░░░░░
╚══██╔══╝██║░░░██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██║░░░░░██║░░░░░
░░░██║░░░██║░░░██║██████╔╝██████╦╝██║░░██║██║░░╚═╝█████╗░░██║░░░░░██║░░░░░
░░░██║░░░██║░░░██║██╔══██╗██╔══██╗██║░░██║██║░░██╗██╔══╝░░██║░░░░░██║░░░░░
░░░██║░░░╚██████╔╝██║░░██║██████╦╝╚█████╔╝╚█████╔╝███████╗███████╗███████╗
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░░╚════╝░╚══════╝╚══════╝╚══════╝

\n\n
`);
const gitCheckoutCommand = `git clone --depth 1 https://github.com/me-imfhd/turbocell ${
  repoName ?? "turbocell"
}`;
const installDepsCommand = `cd ${repoName} && pnpm install`;

console.log(`Initializing the repository...\n\n`);
const checkedout = runCommand(gitCheckoutCommand);
if (!checkedout) process.exit(-1);

console.log(`\nInstalling dependencies...\n\n`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exit(-1);

console.log(`Turbocell Loaded Successfully 🚀🚀\n`);

console.log(`Follow the commands to start:`);

console.log(`\tcp .env.example .env\n`);

console.log(`Setup your postgres database`);

console.log(`\tdocker compose up -d`);
console.log(`\tpnpm db:migrate`);
console.log(`\tpnpm db:push\n`);

console.log(`Set relevant env variables to get started.\n`);
console.log(`To start development server run:`);
console.log(`\tpnpm dev\n`);
