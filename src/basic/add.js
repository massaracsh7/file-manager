import os from "os";
import path from "path";
import fs from "fs";
import {
  getWorkingDirectory
}
from "../dir/getWorkingDir.js";

export const add = async (fileName) => {
  try {
    const filePath = path.join(getWorkingDirectory(), fileName);
    const writeStream = fs.createWriteStream(filePath);

    // Use the 'end' event to know when the file has been created
    writeStream.on('finish', () => {
      console.log(`Empty file "${fileName}" created in the current working directory.`);
    });

    // Use the 'error' event to handle errors
    writeStream.on('error', (error) => {
      console.error(`Failed to create empty file: ${error.message}`);
    });

    // Close the stream to trigger the 'finish' event
    writeStream.end();
  } catch (error) {
    console.error(`Failed to create empty file: ${error.message}`);
  }
};