import os from "os";
import path from "path";
import fs from "fs";
import {
  getWorkingDirectory
}
from "../dir/index.js";
import {
  ERROR_MESSAGE
} from "../constants.js";

export const cp = (sourcePath, targetDirectory) => {
  try {
    const sourceFile = path.join(sourcePath);
    const targetFile = path.join(targetDirectory, path.basename(sourceFile));
    const readStream = fs.createReadStream(sourceFile);
    const writeStream = fs.createWriteStream(targetFile);
    readStream.pipe(writeStream);
    readStream.on('error', (error) => {
      console.error(ERROR_MESSAGE);
    });
    writeStream.on('error', (error) => {
      console.error(ERROR_MESSAGE);
    });
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
