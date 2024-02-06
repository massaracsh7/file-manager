import path from "path";
import fs from "fs/promises";
import {
  getWorkingDirectory
}
from "../utils/index.js";
import {
  ERROR_MESSAGE
} from "../constants.js";


export const list = async () => {
  try {
    const currentPath = getWorkingDirectory();
    const contents = await fs.readdir(currentPath);

        const directories = [];
        const files = [];

        for (const item of contents) {
          const itemPath = path.join(currentPath, item);
          const stat = await fs.stat(itemPath);

          if (stat.isDirectory()) {
            directories.push({
              Name: item,
              Type: 'directory'
            });
          } else if (stat.isFile()) {
            files.push({
              Name: item,
              Type: 'file'
            });
          }
        }

    const sortedDirectories = directories.sort();
    const sortedFiles = files.sort();

    console.table([...sortedDirectories, ...sortedFiles]);
  } catch (error) {
    console.error(`${ERROR_MESSAGE}`);
  }
};