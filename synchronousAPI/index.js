// file system - synchronous API


import * as fs from 'fs';

//creating directory -  path should be there

// fs.mkdirSync('c:\\Users\\User\\Desktop\\nodeJS\\synchronousAPI\\test1\\demo1');


//creating directory -  path is not required to be there

// fs.mkdirSync('c:\\Users\\User\\Desktop\\nodeJS\\synchronousAPI\\test2\\demo2', {recursive:true});

// read content of directory
// const files = fs.readdirSync('c:\\Users\\User\\Desktop\\nodeJS\\synchronousAPI\\test1');
// for (const file of files)
//     console.log(file);


// remove directory- directory should be empty
// fs.rmdirSync('c:\\Users\\User\\Desktop\\nodeJS\\\\synchronousAPI\\test2\\demo2');

// create and write file
// fs.writeFileSync('readme.txt', 'hello synchronous world');

// read file
const data = fs.readFileSync('readme.txt');
console.log(data);

// and so on...