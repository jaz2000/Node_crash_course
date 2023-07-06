const path = require('path');

// file path
console.log(__filename);
console.log(path.basename(__filename));// to get only the file name

//directory name
console.log(path.dirname(__filename));
console.log(__dirname);// or

//extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//concatenate path
console.log(path.join(__dirname,'first','second'));