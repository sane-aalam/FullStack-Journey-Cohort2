const fs = require("fs");

// read file
fs.readFile("file.txt",'utf8', (err, data) =>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(data);
    }
})

// append new file 
fs.appendFile('myfile2.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// delete new file 

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});