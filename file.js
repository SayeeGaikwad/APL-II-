const fs = require('fs');

// fs.writeFile('input.txt', 'This is a test file created using Node.js!', (err) => {
//   if (err) {
//     console.log("Error writing file:", err);
//     return;
//   }
//   console.log("File written successfully!");

  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log("\nFile content:");
    console.log(data.toString());
  });
// });

// fs.stat('input.txt', (err, stats)=>{
//   if(err){
//     console.log("Error! File not found...",err);
//     return;
//   }
  
//   console.log("File information: ");
//   console.log("Is it a file? ", stats.isFile());
//   console.log("Is it a directory? ", stats.isDirectory(), "bytes");
//   console.log("File size: ", stats.size);
//   console.log("Create at: ", stats.ctime);
//   console.log("Last modified:", stats.mtime);
// });


// fs.unlink('output.txt', (err)=>{
//   if(err){
//     console.log("Error! File cannot be deleted....", err);
//     return;
//   }

//   console.log("File deleted successfully.....")

// });

fs.mkdir('project/file1/index.html', {recursive:true}, (err)=>{
  if(err){
    console.log("Error! Folder cannot be created....", err);
    return;
  }
  else{
    console.log("Folder created successfully...");
  }
});

fs.readdir('file2',(err,files)=>{
  if(err){
    console.log("Error! Cannot read the directory...", err);
    return;
  }else{
    console.log("Directory read successfully...");
  }
});

fs.rmdir('project',{recursive:true},(err)=>{
  if(err){
    console.log("Error! Folder cannot be deleted....", err);
    return;
  }else{
    console.log("Folder deleted successfully...");
  }
});