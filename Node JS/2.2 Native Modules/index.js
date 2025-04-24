const fs = require('fs');
fs.writeFile("messages.txt", "hello from mobi" , (err) => {
     if (err) throw err;
     console.log('The file has been saved!');
   }); 
fs.readFile("messages.txt", "utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
  });