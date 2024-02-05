import os from "os";
import path from "path";
import fs from "fs/promises";
import {
  up,
  cd,
  list
} from "./dir/index.js";
import {
  cat
} from "./basic/cat.js";
import {
  add
} from "./basic/add.js";
import {
  rn
} from "./basic/rn.js";
import {
  cp
} from "./basic/copy.js";
import {
  mv
} from "./basic/mv.js";
import {
  rm
} from "./basic/rm.js";
import {
  eol
} from "./os/eol.js";
import {
  cpus
} from "./os/cpus.js";
import {
  homedir
} from "./os/homeDir.js";
import {
  username
} from "./os/username.js";
import {
  architecture
} from "./os/architecture.js";
import {
  hash
} from "./hash/hash.js";
import {
  compress
}
from "./compress/compress.js";
import {
  decompress
}
from "./compress/decompress.js";
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
  }
  console.log(`${CURRENTLY_DIRECTORY} ${getWorkingDirectory()}`);
});

const userArr = process.argv.find(arg => arg.startsWith('--username='));
const userName = userArr ? userArr.split('=')[1] : 'user';
process.chdir(os.homedir());

console.log(`${WELCOME} ${userName}!`);
console.log(`${CURRENTLY_DIRECTORY} ${getWorkingDirectory()}`);

process.stdout.write('Enter your command: ');