// File system - promise API

import * as fs from 'fs/promises';

// 2 ways to create directory:

//creating Directory - Path should be there

// try {
//     await fs.mkdir('c:\\Users\\User\\Desktop\\nodeJS\\5promiseBasedAPI\\test\\demo');
//     console.log("Directory created...");
// } catch (error) {
//     console.log(error);
// }


//creating Directory - Path is not required to be there

// try {
//     await fs.mkdir('c:\\Users\\User\\Desktop\\nodeJS\\5promiseBasedAPI\\teest\\demo', {recursive: true});
//     console.log("Directory created...");
// } catch (error) {
//     console.log(error);
// }

// read content of directory

// try {
//     const files = await fs.readdir('c:\\Users\\User\\Desktop\\nodeJS\\5promiseBasedAPI\\test');
//     for (const file of files)
//         console.log(file);
// } catch (error) {
//     console.log(error);
// }

// remove directory - directory should be empty

// try {
//     await fs.rmdir('c:\\Users\\User\\Desktop\\nodeJS\\5promiseBasedAPI\\teest\\demo');
//     console.log("Directory removed...");
// } catch (error) {
//     console.log(error);
// }

// create and write file
// try {
//     await fs.writeFile('readme.txt', 'Hello nodeJS');
// } catch (error) {
//     console.log(error);
// }


// read file

// try {
//     const data = await fs.readFile('readme.txt');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }


// try {
//     const data = await fs.readFile('readme.txt', 'utf-8');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// append data into file

// try {
//     await fs.appendFile('readme.txt', 'course here');
// } catch (error) {
//     console.log(error);
// }


// copy file

// try {
//     await fs.copyFile('readme.txt', 'info.txt'); //ya info.txt yei dirctory ma create gareko so afulai chaiyeko direcry name dida hunxa
//     console.log("File copied...");
// } catch (error) {
//     console.log(error);
// }

// get file information

try {
    const stats = await fs.stat('c:\\Users\\User\\Desktop\\nodeJS\\5promiseBasedAPI\\test\\emp.js');
    console.log(stats.isDirectory());
    console.log(stats.isFile());
    console.log(stats);

} catch (error) {
    console.log(error);
}