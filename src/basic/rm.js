import fs from 'fs/promises';

export const rm = async (filePath) => {
  try {
    // Delete the file
    await fs.unlink(filePath);
    console.log(`File "${filePath}" deleted.`);
  } catch (error) {
    console.error(`Failed to delete file: ${error.message}`);
    throw new Error(EXECUTION_ERROR_MESSAGE);
  }
};