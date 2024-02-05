import {
  changeDir
}
from "../utils/index.js"
import {
  ERROR_MESSAGE
} from "../constants.js";

export const up = async () => {
  try {
    const newDirectory = await changeDir('..');
    if (newDirectory) {
      console.log(`You went up to: ${newDirectory}`);
    }
  } catch (error) {
    console.error(`${ERROR_MESSAGE}`);
  }
};

