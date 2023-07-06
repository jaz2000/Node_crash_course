const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());

class Logger extends EventEmitter{
    log(msg){
        this.emit('message',{id:uuid.v4(),msg});
    }
}

module.exports = Logger

// index.js
//
// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('message',(data)=>{console.log('called listener',data)});

// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');