import {
  up, cd, list
} from "../dir/index.js";
import {
  cat, add, rn, cp, mv, rm
} from "../basic/index.js";
import {
  eol, cpus, homedir, username, architecture
} from "../os/index.js";
import {
  hash
} from "../hash/hash.js";
import {
  compress, decompress
}
from "../compress/index.js";

export const handleUserInput = async (input) => {
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
        cat(targetFile);
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
        const [sourcePath, targetDirectory] = input.slice(3).trim().split(' '); 
        cp(sourcePath, targetDirectory);
      } else if (input.startsWith('mv')) {
        const [sourcePath, targetDirectory] = input.slice(3).trim().split(' ');
        await mv(sourcePath, targetDirectory);
      } else if (input.startsWith('rm')) {
        const filePath = input.slice(3).trim();
        await rm(filePath);
      } else if (input.startsWith('hash')) {
        const targetFile = input.slice(5).trim();
        await hash(targetFile); 
      } else if (input.startsWith('compress')) {
        const [sourcePath, targetDirectory] = input.slice(9).trim().split(' ');
        compress(sourcePath, targetDirectory);
      } else if (input.startsWith('decompress')) {
        const [sourcePath, targetDirectory] = input.slice(11).trim().split(' ');
        decompress(sourcePath, targetDirectory);
      } else {
        console.log('Invalid input. Please enter a valid command.');
      }
  }
};