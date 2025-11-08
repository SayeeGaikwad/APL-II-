const fs = require('fs');
const zlib = require('zlib'); 

const { pipeline } = require('stream'); 

const source = fs.createReadStream('input.txt');
const gzip = zlib.createGzip(); 
const destination = fs.createWriteStream('input.txt.gz');


pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('Pipeline failed:', err);
  } else {
    console.log('File successfully compressed using pipeline!');
  }
});
