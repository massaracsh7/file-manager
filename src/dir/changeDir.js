import path from "path";
import fs from "fs/promises";
import {
  getWorkingDirectory
}
from "./getWorkingDir.js";

export const changeDir = async (pathName) => {
  try {
    const targetPath = path.resolve(getWorkingDirectory(), pathName);
    const targetStats = await fs.stat(targetPath);

    if (targetStats.isDirectory()) {
      process.chdir(targetPath);
      return targetPath;
    } else {
      console.log(`Not a directory: ${pathName}`);
      return null;
    }
  } catch (err) {
    throw new Error('Operation failed');
  }
};