const http = require('http');


http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'application/json' })
        let salida = {
            nombre: 'carlos',
            edad: '21',
            url: req.url
        }
        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080');