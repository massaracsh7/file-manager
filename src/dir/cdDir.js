import {
  changeDir
}
from "./index.js"
import {
  ERROR_MESSAGE
} from "../constants.js";

export const cd = async (pathName) => {
  try {
    const newDirectory = await changeDir(pathName);
    if (newDirectory) {
      console.log(`Changed working directory to: ${newDirectory}`);
    }
  } catch (error) {
    console.error(`${ERROR_MESSAGE}`);
  }
};