const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('Finished reading file.');
});

readableStream.on('error', (err) => {
  console.error('Error:', err);
});
