import {
  changeDir
}
from "./changeDir.js"

export const up = async () => {
  try {
    const newDirectory = await changeDir('..');
    if (newDirectory) {
      console.log(`You went up to: ${newDirectory}`);
    }
  } catch (error) {
    console.error(`Operation failed: ${error.message}`);
  }
};

