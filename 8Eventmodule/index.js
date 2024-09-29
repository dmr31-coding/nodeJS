import EventEmitter from 'events';

//creating class
class MyEmitter extends EventEmitter { }

//creating object
const myEmitter = new MyEmitter();

//example 1

//register event listener
myEmitter.on('event', () => {
    console.log("An Event occurred...");
})

//trigger event
myEmitter.emit('event');
myEmitter.emit('event');



//example 2

//register event listener
let m = 0;
myEmitter.on('event', () => {
    console.log(++m);
})

//trigger event
myEmitter.emit('event');
myEmitter.emit('event');


//example 3

//register event listener
// let m = 0;
myEmitter.once('event', () => {
    console.log(++m);
})

//trigger event
myEmitter.emit('event');
myEmitter.emit('event');
