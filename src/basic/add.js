import os from "os";
import path from "path";
import fs from "fs";
import {
  getWorkingDirectory
}
from "../utils/index.js";
import {
  ERROR_MESSAGE
} from "../constants.js";

export const add = async (fileName) => {
  try {
    const filePath = path.join(getWorkingDirectory(), fileName);
    const writeStream = fs.createWriteStream(filePath);
    writeStream.on('error', (error) => {
      console.error(ERROR_MESSAGE);
    });
   } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};