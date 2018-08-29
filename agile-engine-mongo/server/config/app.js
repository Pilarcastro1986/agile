const express = require('express')
const bodyParser = require('body-parser')
const controller = require(`${process.env.PWD}/server/controllers/transactionController.js`)
//const getTotal = require(`${process.env.PWD}/server/config/getTotal.js`)






const app = express()

.use(bodyParser.urlencoded({extended : true}))
.use(bodyParser.json())

// .use(function(req,res,next){
//     req.total = getTotal();
//     console.log('req', req.total)
//     next()
// })



.get('/api/v1/transactions', controller.getTransactions)
.post('/api/v1/transaction/credit', controller.postCredit)
.post('/api/v1/transaction/debit', controller.postDebit)

.use(express.static('./public'))

.use(function(error, req, res, next){
    console.log(`Se produjo un error: ${error}`)
})


module.exports = app