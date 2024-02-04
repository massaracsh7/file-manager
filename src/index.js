import os from "os";
import path from "path";
import fs from "fs/promises";
import {
  up
} from "./dir/upDir.js";
import {
  cd
} from "./dir/cdDir.js";
import {
  list
} from "./dir/listDir.js";
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
from "./dir/getWorkingDir.js";

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
    case 'ls':
      await list();
      break;
    case 'os --EOL':
      eol();
      break;
    case 'os --cpus':
      cpus();
      break;
    case 'os --homedir':
      homedir();
      break;
    case 'os --username':
      username();
      break;
    case 'os --architecture':
      architecture();
      break;
    default:
      if (input.startsWith('cat')) {
        const targetFile = input.slice(3).trim();
        await cat(targetFile); // Assuming there's a cat function for reading a file
      } else if (input.startsWith('cd')) {
        const targetDirectory = input.slice(3).trim();
        await cd(targetDirectory);
      } else if (input.startsWith('add')) {
        const targetDirectory = input.slice(3).trim();
        await add(targetDirectory);
      } else if (input.startsWith('rn')) {
        const [oldFileName, newFileName] = input.slice(3).trim().split(' ');
        await rn(oldFileName, newFileName);
      } else if (input.startsWith('cp')) {
        const [sourcePath, targetDirectory] = input.slice(3).trim().split(' '); // Split by any whitespace
        await cp(sourcePath, targetDirectory);
      } else if (input.startsWith('mv')) {
        const [sourcePath, targetDirectory] = input.slice(3).trim().split(' ');
        await mv(sourcePath, targetDirectory);
      } else if (input.startsWith('rm')) {
        const filePath = input.slice(3).trim();
        await rm(filePath);
      }
      if (input.startsWith('hash')) {
        const targetFile = input.slice(5).trim();
        await hash(targetFile); // Assuming there's a cat function for reading a file
      }
      if (input.startsWith('compress')) {
        const [sourcePath, targetDirectory] = input.slice(9).trim().split(' ');
        console.log(sourcePath, targetDirectory);
        await compress(sourcePath, targetDirectory); // Assuming there's a cat function for reading a file
      }
      if (input.startsWith('decompress')) {
        const [sourcePath, targetDirectory] = input.slice(11).trim().split(' ');
        console.log(sourcePath, targetDirectory);
        await decompress(sourcePath, targetDirectory); // Assuming there's a cat function for reading a file
      } else {
        console.log('Invalid input. Please enter a valid command.');
      }
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