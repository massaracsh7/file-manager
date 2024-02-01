import os from "os";
import path from "path";
import fs from "fs/promises";
import { up } from "./dir/upDir";
import {
  getWorkingDirectory
}
from "./dir/getWorkingDir";

const handleExit = () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
};

const handleUserInput = async (input) => {
  switch (input) {
    case '.exit':
      handleExit();
      break;
    case 'up':
      await up();
      break;
  }
};

process.on('SIGINT', handleExit);

process.stdin.on('data', async (data) => {
  const input = data.toString().trim();
  try {
    await handleUserInput(input);
  } catch (error) {
    console.error(`Invalid input: ${error.message}`);
  }
  console.log(`You are currently in: ${getWorkingDirectory()}`);
});

const userArr = process.argv.find(arg => arg.startsWith('--username='));
const userName = userArr ? userArr.split('=')[1] : 'user';
process.chdir(os.homedir());

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in: ${getWorkingDirectory()}`);

process.stdout.write('Enter your command: ');