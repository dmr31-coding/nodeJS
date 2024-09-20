// path Module

const path = require('path');

// filename
console.log(path.basename('c:/nodejs/pathModule/index3.js'));
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));
console.log(__filename);


// dirname
console.log(path.dirname('c:/nodejs/pathModule/index3.js'));
console.log(path.dirname(__filename));

//join
console.log(path.join('/search', 'course/js', 'unit1'));
console.log(path.join('/search', 'course/js', 'unit1', '..', '..'));

