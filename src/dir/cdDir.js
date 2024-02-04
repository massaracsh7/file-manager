import {
  changeDir
}
from "./changeDir.js"

export const cd = async (pathName) => {
  console.log(pathName);
  try {
    const newDirectory = await changeDir(pathName);
    if (newDirectory) {
      console.log(`Changed working directory to: ${newDirectory}`);
    }
  } catch (error) {
    console.error(`Operation failed: ${error.message}`);
  }
};