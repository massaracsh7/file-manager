import gzip from 'zlib'
import {
  createReadStream,
  createWriteStream
} from 'fs'

export const decompress = (pathToSource, pathToDestination) => {
  const readStream = createReadStream(pathToSource);
  const writeStream = createWriteStream(pathToDestination);
  const brotliStream = gzip.createBrotliDecompress()
  const result = readStream.pipe(brotliStream).pipe(writeStream)
  result.on('finish', () => {
    console.log('file is decompressed')
  })

  result.on('error', () => {
    console.log('Error')
  })
}