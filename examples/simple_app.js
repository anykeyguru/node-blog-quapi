const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;


const server = http.createServer((rec, res) => {

    const createPath = (page) => path.resolve(__dirname, 'views',`${page}.html`);

    res.setHeader('Content-Type', 'text/html')

    switch (rec.url) {
        case '/':
        case '/index':
        case '/home':
            basePath = createPath('index');
            res.statusCode = 200;
            break;
        case '/contacts':
            basePath = createPath('contacts');
            res.statusCode = 200;
            break;
        case '/about':
            res.statusCode = 301;
            res.setHeader('Location', '/contacts')
            res.end();
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;
    }

    fs.readFile(basePath, (err, data) =>{
        if (err){
            console.log(err);
            res.statusCode = 500;
            res.end();
        } else {
            console.log(rec.method, rec.url, res.statusCode);
            res.write(data);
            res.end();
        }
    });



} );

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error): console.log(`Listening on ${PORT}`);;
});