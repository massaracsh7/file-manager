import os from "os";
import path from "path";
import fs from "fs/promises";
import {
  getWorkingDirectory
} from "../dir/getWorkingDir.js";

export const rn = async (oldFileName, newFileName) => {
  try {
    await fs.rename(oldFileName, newFileName);

    console.log(`File "${oldFileName}" renamed to "${newFileName}".`);
  } catch (error) {
    console.error(`Failed to rename file: ${error.message}`);
  }
};