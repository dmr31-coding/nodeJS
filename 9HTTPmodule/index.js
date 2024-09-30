// create web server - http module

import http from 'http';

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Response from server');
// });

// server.listen(8000, 'localhost', () => {
//     console.log('Server running at http://localhost:8000');
// });



const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Response from server 2');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log('Server 2 running at http://localhost:8000');
});