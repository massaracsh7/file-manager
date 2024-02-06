import os from "os";
import {
  getWorkingDirectory
}
from "./utils/getWorkingDir.js";
import {
  ERROR_INPUT,
  WELCOME,
  CURRENTLY_DIRECTORY
} from "./constants.js";
import {
  handleUserInput
}
from "./utils/index.js";

const handleExit = () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
};

process.on('SIGINT', handleExit);

process.stdin.on('data', async (data) => {
  const input = data.toString().trim();
  try {
    await handleUserInput(input);
  } catch (error) {
    console.error(ERROR_INPUT);
  } finally {
    console.log(`${CURRENTLY_DIRECTORY} ${getWorkingDirectory()}`);
  }
});

const userArr = process.argv.find(arg => arg.startsWith('--username='));
const userName = userArr ? userArr.split('=')[1] : 'user';
process.chdir(os.homedir());

console.log(`${WELCOME} ${userName}!`);
console.log(`${CURRENTLY_DIRECTORY} ${getWorkingDirectory()}`);

process.stdout.write('Enter your command: ');