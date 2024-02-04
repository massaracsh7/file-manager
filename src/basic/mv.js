import os from "os";
import path from "path";
import fs from "fs";
import {
  getWorkingDirectory
}
from "../dir/getWorkingDir.js";


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
      console.error(`Failed`);
    })

    readable.on('end', () => {
      fs.unlink(sourceFile, () => {})
    })

    writable.on('error', () => {
      console.error(`Failed`);
    })

    writable.on('finish', () => {
      console.log('file is moved')
    })
  } catch (error) {
    console.error(`Failed`);
  }
};