import {
  createReadStream
} from 'fs';
import {
  ERROR_MESSAGE
} from "../constants.js";

export const cat = (filePath) => {
  try {
    const fileStream = createReadStream(filePath, 'utf-8');
    fileStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
    fileStream.on('end', () => {
      console.log('\n ');
    });
    fileStream.on('error', (error) => {
      console.error(ERROR_MESSAGE);
    });
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};