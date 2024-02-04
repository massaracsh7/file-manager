import {
  join,
  dirname
} from 'path';
import fs from 'fs/promises';

import { createHash } from 'crypto';

export const hash = async (filePath) => {
  const fileHash = createHash('sha256');
  try {
    const data = await fs.readFile(filePath);
    const hashFile = fileHash.update(data).digest('hex');
    console.log(hashFile);
  } catch (error) {
    throw new Error(error);
  }
};

