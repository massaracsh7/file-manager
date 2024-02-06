import fs from 'fs/promises';
import {
  ERROR_MESSAGE
} from "../constants.js";

export const rm = async (filePath) => {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};