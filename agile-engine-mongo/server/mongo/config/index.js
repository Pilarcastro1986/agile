const urlMongo =  'mongodb://localhost:27017/agile-engine';
const mongoose = require('mongoose')

const mongoConection = mongoose.connection.openUri(urlMongo,{ useNewUrlParser: true }, (err , res ) =>{
    if(err) return console.log(`Se produjo un error ${err}`);
    console.log('Conectado con exito puerto 3000 agile-engine-mongodb')
})

module.exports = mongoConection;