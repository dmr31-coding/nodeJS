// file system - callback API

import { error } from 'console';
import * as fs from 'fs';

//creating directory -  path should be there
// fs.mkdir('c:\\Users\\User\\Desktop\\nodeJS\\callBackorAsyncAPI\\test1\\demo1', function (error) {
//     if (error) throw error;
//     console.log("Directory created...");
// });

//creating directory -  path is not required to be there
// fs.mkdir('c:\\Users\\User\\Desktop\\nodeJS\\callBackorAsyncAPI\\test2\\demo2', {recursive: true}, (error) => {
//     if (error) throw error;
//     console.log("Directory created...");
// });

// read content of directory

// fs.readdir('c:\\Users\\User\\Desktop\\nodeJS\\callBackorAsyncAPI\\test1', (error, files) => {
//     if (error) throw error;
//     for (const file of files)
//         console.log(file);
// });


// remove directory- directory should be empty
// fs.rmdir('c:\\Users\\User\\Desktop\\nodeJS\\callBackorAsyncAPI\\test1\\demo1', (error) => {
//     if (error) throw error;
//     console.log("Directory removed...");
// });

// create and write file
// fs.writeFile('readme.txt', 'hello progamming world', (error) => {
//     if (error) throw error;
//     console.log("File created...");
// })

// read file
// fs.readFile('readme.txt', (error, data) => {
//     if (error) throw error;
//     console.log(data);
// })

// read file
// fs.readFile('readme.txt', 'utf-8', (error, data) => {
//     if (error) throw error;
//     console.log(data);
// })

// //append data into file
// fs.appendFile('readme.txt', 'today here we are', (error) => {
//     if (error) throw error;
//     console.log("Data appended...");
// })

//copy file
// fs.copyFile('readme.txt', 'info.txt', (error) => {
//     if (error) throw error;
//     console.log("file copied...");
// })

// get file information

fs.stat('c:\\Users\\User\\Desktop\\nodeJS\\callBackorAsyncAPI\\test2\\demo2', (error, stats) => {
    if (error) throw error;
    console.log(stats.isDirectory());
    console.log(stats.isFile());
    console.log(stats);


})

