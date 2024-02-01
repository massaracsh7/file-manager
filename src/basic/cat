import {
  createReadStream
} from 'fs';
export const cat = (filePath) => {

  if (!filePath) {
    console.error('Please provide the path to the file.');
    process.exit(1);
  }

  const readStream = createReadStream(filePath);

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk); // Print each chunk to the console
  });

  readStream.on('end', () => {
    console.log('\nFile read complete.');
  });

  readStream.on('error', (error) => {
    console.error(`Error reading the file: ${error.message}`);
    process.exit(1);
  });
};