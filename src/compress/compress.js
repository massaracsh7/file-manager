import gzip from 'zlib'
import {
  createReadStream,
  createWriteStream
} from 'fs'

export const compress = (pathToSource, pathToDestination) => {
  const readStream = createReadStream(pathToSource);
  const writeStream = createWriteStream(pathToDestination);
  const brotliStream = gzip.createBrotliCompress()
  const result = readStream.pipe(brotliStream).pipe(writeStream)
  result.on('finish', () => {
    console.log('file is compressed')
  })

  result.on('error', () => {
    console.log('Error')
  })
}
