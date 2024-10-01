// http module

import http from 'http';
import fs from 'fs';


const server = http.createServer((req, res) => {
    res.writeHead(200, "OK", {'Content-Type': 'text/html'})
    // res.end('<h1>Home page</>');
    // if(req.url === '/') {
    // res.end('<h1>Home page</>');

    // }
    // else if(req.url === '/about') {
    //     res.end('<h1>About page</>');
    
    // } else {
    //     res.end('<h1 page not found</>');
        
    // }


    if(req.url === '/') {
        fs.readFile('./public/home.html', (error, data) => {
            if (error) throw error;
            res.end(data);
        })
        
    
    }
    else if(req.url === '/about') {
        fs.readFile('./public/about.html', (error, data) => {
            if (error) throw error;
            res.end(data);
        })
    
    } else {
        res.end('<h1 page not found</>');
        
    }
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log('Server 2 running at http://localhost:8000');
});