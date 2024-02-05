import {
  changeDir
}
from "../utils/index.js"
import {
  ERROR_MESSAGE
} from "../constants.js";

export const cd = async (pathName) => {
  try {
    const newDirectory = await changeDir(pathName);
  } catch (error) {
    console.error(`${ERROR_MESSAGE}`);
  }
};