const fs=require('fs');

const writableStream=fs.createWriteStream("output.txt");
writableStream.write("This is a writable stream example.\n")
writableStream.write("Writing data in chunks...\n")

writableStream.end("Stream writing completed.");

writableStream.on("finish",()=>{
    console.log("All data has been written to the file.");
});

writableStream.on("error",(err)=>{
    console.error("Error:",err);
});