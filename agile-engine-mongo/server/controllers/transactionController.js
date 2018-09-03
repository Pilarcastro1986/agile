const Transaction = require(`${process.env.PWD}/server/mongo/models/transaction.js`)
// const uuidv1 = require('uuid/v1');




function getTransactions(req, res, next){
    Transaction.find()
    .then(resolve => {
       
        const a = resolve
        const t = getTotal(a)
        res.send(resolve)
    })
    .catch(error => {
        console.log('Se produjo un error', error)
    })
}



function postDebit(req, res, next){
    const transaction =  new Transaction({
        type: 'debit',
        aumount: req.body.aumount,
        effectiveDate : new Date()
    })
    transaction.save()
    .then(resolve => {
        res.send(resolve)
    })
    .catch(error => {
        console.log('Se produjo un error', error)
        next(error)
    })
}

function getTotal(data){
   const t = data.filter(function(element){
        return element.type == 'credit'
    })
    .map(function(element){
      return element.aumount
    })
    .reduce(function(prev,element,index){
        return prev + element
    })
    console.log('TT', t) // <-- SUMA DE TODOS LOS CREDITOS
    return t
}


function postCredit(req, res, next){
    const transaction =  new Transaction({
        type: 'credit',
        aumount: req.body.aumount,
        effectiveDate : new Date()
    })
    const t = getTransactions(req, res, next)
    console.log(t)

    // transaction.save()
    // .then(resolve => {
    //     res.send(resolve)
    // })
    // .catch(error => {
    //     console.log('Se produjo un error', error)
    //     next(error)
    // })
}





module.exports = {postDebit, postCredit, getTransactions}