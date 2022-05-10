const { response } = require('express');
const http = require('http');
const fs = require('fs');





const server = http.createServer((req, res) => {
    console.log(req.url)

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/Main.html',(err,data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});







server.listen(3000,'localhost',() => {
});
