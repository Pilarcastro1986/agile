const express = require('express')
const bodyParser = require('body-parser')
const controller = require(`${process.env.PWD}/server/controllers/transactionController.js`)





const app = express()

.use(bodyParser.urlencoded({extended : true}))
.use(bodyParser.json())

.post('/api/v1/transaction/credit', controller.credit)
.post('/api/v1/transaction/debit', controller.debit)



.use(function(error, req, res, next){
    console.log(`Se produjo un error: ${error}`)
})


module.exports = app