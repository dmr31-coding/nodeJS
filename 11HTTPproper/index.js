// create web server - http module

import http from 'http';



const server = http.createServer((req, res) => {

    //request
    // console.log(req.url);

    if(req.url != '/favicon.ico') {
        console.log(req.url);
    }
    console.log(req.method);

    //response
    // res.statusCode = 202;
    // res.statusMessage = "Good";

    // res.setHeader('Content-Type', 'text/plain')

    //all in one method
    res.writeHead(203, "Well", {'Content-Type': 'text/plain'})
    res.end('Response from server 2224');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log('Server 22 running at http://localhost:8000');
});