import os from "os";
import path from "path";
import fs from "fs";
import {
  getWorkingDirectory
}
from "../utils/getWorkingDir.js";
import {
  ERROR_MESSAGE
} from "../constants.js";


export const mv = async (sourcePath, targetDirectory) => {
  const sourceFile = path.join(getWorkingDirectory(), sourcePath);
  const targetFile = path.join(targetDirectory, path.basename(sourceFile));
  try {
    const readable = fs.createReadStream(sourceFile, {
      encoding: 'utf-8'
    });
    const writable = fs.createWriteStream(targetFile);
    readable.pipe(writable)
    readable.on('error', () => {
      console.error(ERROR_MESSAGE);
    })
    readable.on('end', () => {
      fs.unlink(sourceFile, () => {})
    })
    writable.on('error', () => {
      console.error(ERROR_MESSAGE);
    })
   } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};