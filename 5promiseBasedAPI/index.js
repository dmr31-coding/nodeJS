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
