import gzip from 'zlib'
import {
  createReadStream,
  createWriteStream
} from 'fs'
import {
  ERROR_MESSAGE
} from "../constants.js"

export const compress = (pathToSource, pathToDestination) => {
  try {
    const readStream = createReadStream(pathToSource);
    readStream.on('error', () => {
      console.error(ERROR_MESSAGE);
    })
    const writeStream = createWriteStream(pathToDestination);
    writeStream.on('error', () => {
      console.error(ERROR_MESSAGE);
    })
    const brotliStream = gzip.createBrotliCompress()
    const result = readStream.pipe(brotliStream).pipe(writeStream)
    result.on('error', () => {
      console.error(ERROR_MESSAGE);
    })
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
}