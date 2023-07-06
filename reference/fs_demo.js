const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(
//     path.join(__dirname,'/test'),
//     {},
//     err=>{
//         if(err) throw err;
//         console.log('created folder test....');
//     });

//write to file
// fs.writeFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'Hello World!',
//     err=>{
//         if(err)throw err;
//         console.log('File written to ...');
    
//     });

//write and append
// fs.writeFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'Hello World!',
//     err=>{
//         if(err)throw err;
//         console.log('File written to ...');
//         fs.appendFile(
//             path.join(__dirname,'/test','hello.txt'),
//             'Hello',
//             err=>{
//                 if(err)throw err;
//                 console.log('File written to ...');
            
//             });
//     }
//     );

//Read File
// fs.readFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'utf-8',
//     (err,data)=>{
//         if(err) throw err;
//         console.log(data);
//     }
// );

//Rename File
// fs.rename(
//     path.join(__dirname,'/test','hello.txt'),
//     path.join(__dirname,'/test','hellohi.txt'),
//     err=>{
//         if(err) throw err;
//         console.log('file renamed');
//     }
// );
