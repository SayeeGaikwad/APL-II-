const fs = require('fs');
const os=require('os');
const path = require('path');

fs.writeFileSync('test.txt', 'This is a test file created!', (err)=>{
    if(err){
        console.log("Error writing file:", err);
        return;             
    }else{
        console.log("File written successfully!");
    }
});

const data = fs.readFileSync('test.txt', 'utf8');
console.log("\nFile content:");
console.log(data.toString());

console.log("OS Type: ", os.type());
console.log("OS Release: ", os.release());
console.log("OS Total Memory: ", os.totalmem(), "bytes");
console.log("OS Free Memory: ", os.freemem(), "bytes");
console.log("OS Uptime: ", os.uptime(), "seconds");
console.log("OS User Info: ", os.userInfo());

console.log("Current Directory: ", __dirname);
console.log("Current File: ", __filename);
console.log("File extension: ",path.extname(__filename));