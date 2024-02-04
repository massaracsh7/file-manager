import os from "os";
import path from "path";
import fs from "fs";
import {
  getWorkingDirectory
}
from "../dir/getWorkingDir.js";

export const cp = (sourcePath, targetDirectory) => {
  const sourceFile = path.join(sourcePath);
  const targetFile = path.join(targetDirectory, path.basename(sourceFile));

  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(targetFile);

  // Pipe the read stream to the write stream
  readStream.pipe(writeStream);

  // Handle events
  readStream.on('error', (error) => {
    console.error(`Failed to read file: ${error.message}`);
  });

  writeStream.on('error', (error) => {
    console.error(`Failed to write file: ${error.message}`);
  });

  writeStream.on('finish', () => {
    console.log(`File "${sourcePath}" copied to "${targetDirectory}".`);
  });
};
