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
        // if(req.url==='/'){
        //     // res.writeHead(200,{'Content-Type':'text/html'});
        //     // res.end('<h1>Home</h1>');
        //     fs.readFile(
        //         path.join(__dirname,'public','index.html'),
        //         (err,content)=>{
        //             if(err) throw err;
        //             res.writeHead(200,{'content-Type':'text/html'});
        //             res.end(content);
        //         }
        //     )
        // }
        // // if(req.url==='/about'){
        // //     // res.writeHead(200,{'Content-Type':'text/html'});
        // //     // res.end('<h1>Home</h1>');
        // //     fs.readFile(
        // //         path.join(__dirname,'public','about.html'),
        // //         (err,con)=>{
        // //             if(err) throw err;
        // //             res.writeHead(200,{'content-Type':'text/html'});
        // //             res.end(con);
        // //         }
        // //     )
        // // }
        // if(req.url==='/api/users'){
            
        //     const users = [
        //         {name:'Bob Smith',age:40},
        //         {name: 'John Doe',age:30}
        //     ]
        //     res.writeHead(200,{'Content-Type':'application/json'});
        //     res.end(JSON.stringify(users));
            
        // }
        //build file path
        let filepath = path.join(__dirname,'public',req.url==='/'?'index.html':req.url);
        //extension of file
        let extname = path.extname(filepath);
        //initial content type
        let contentType = 'text/html';

        //check ext and set content type
        switch(extname){
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
        }

        // Check if contentType is text/html but no .html file extension
        if (contentType == "text/html" && extname == "") filepath += ".html";

        // log the filePath
        console.log(filepath);

        //Read File
        fs.readFile(filepath,(err,content)=>{
            if(err){
                if(err.code=='ENOENT'){
                    //page not found
                    fs.readFile(
                        path.join(__dirname,'public','404.html'),
                        (err,content)=>{
                            res.writeHead(404, { "Content-Type": "text/html" });
                            res.end(content,'utf8');
                        }
                    );
                }
                else{
                    //some server error
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
            }
            else{
                //success
                res.writeHead(200,{'content-Type':contentType});
                res.end(content, "utf8");
            }
        })
    }
);

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`server running on port ${PORT}`));