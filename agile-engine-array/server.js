const http = require('http')
const port = require(`${process.env.PWD}/server/config/router.js`)
const app = require(`${process.env.PWD}/server/config/app.js`)

http
    .createServer()
    .on('request', app)
    .on('error', function(error){
        switch (error.code){
            case 'EADDRINUSE':
            console.log('puerto en uso')
            break;
            case 'EACCES':
            console.log('error de permisos')
            break;
            default:
            throw error;
        }
    }).listen(port)