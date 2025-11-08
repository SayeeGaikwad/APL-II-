const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())       
  .pipe(fs.createWriteStream('input.txt.gz'))
  .on('finish', () => {
    console.log('File compressed successfully using chaining.');

    
    fs.createReadStream('input.txt.gz')
      .pipe(zlib.createGunzip())   
      .pipe(fs.createWriteStream('output.txt'))
      .on('finish', () => {
        console.log('File decompressed successfully using chaining.');
      });
  });
