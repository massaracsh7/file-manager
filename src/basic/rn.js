import os from "os";
import path from "path";
import fs from "fs/promises";
import {
  getWorkingDirectory
} from "../dir/index.js";
import {
  ERROR_MESSAGE
} from "../constants.js";

export const rn = async (oldFileName, newFileName) => {
  try {
    await fs.rename(oldFileName, newFileName);
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};