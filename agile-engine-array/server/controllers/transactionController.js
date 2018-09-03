const Transaction = require(`${process.env.PWD}/server/models/transaction.js`)
const _ = require('lodash')

var history = []
for(var i = 0 ; i < history.length; i ++){
    console.log(history[i])
}


function credit(req, res, next){
    const transaction =  new Transaction({
        type: req.body.type,
        aumount: req.body.aumount,
    })
    history.push(transaction)
    res.send('Se acredito con exito')
    console.log('Historial', history)
}




function debit(req, res, next){
    const transaction =  new Transaction({
        type: req.body.type,
        aumount: req.body.aumount,
    })
    const total = getTotal()
    console.log(total)
    // if(req.body.aumount < 100){
    //     console.log('es menor')
    // }
    // history.push(transaction)
    // res.send('Se debito con exito')
    // console.log('aaa',history)
}

function getTotal() {
    console.log(history)
    const result = _.chain(history)
    .filter(function(element){
        return element.type == 'credit'
    })
    .map(function(element){
    return element.aumount
    })
    .reduce(function(prev,element,index){
        return prev + element
    })
    .value();
    return result

}

 



module.exports = {debit, credit}