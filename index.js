// const person = require('./person')
// console.log(person)

// const Person = require('./person');
// const person = new Person('Arjun',24);

// console.log(person);

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('message',(data)=>{console.log('called listener',data)});

// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer(
    (req,res)=>{
        // console.log(req.url);
        if(req.url=='/'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('<h1>Home</h1>');
        }
    }
);

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`server running on port ${PORT}`));