


var fs = require('fs');


fs.readFile('readme.txt', 'utf8', (err, data)=>{
  fs.writeFile('writeMe.txt', data, (err)=>{console.log(err);});
});

//both methods, when asynchronous, need a third argument that must be a function. Otherwise it won't work.
