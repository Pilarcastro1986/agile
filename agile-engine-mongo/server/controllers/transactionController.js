const Transaction = require(`${process.env.PWD}/server/mongo/models/transaction.js`)
// const uuidv1 = require('uuid/v1');




function getTransactions(req, res, next){
    Transaction.find()
    .then(resolve => {
        res.send(resolve)
        const a = resolve
        const t = getTotal(a)
        // let credito = 0;
        // let debito = 0;
        // let total;

        // for(var i = 0; i < a.length ; i++){
        //    if(a[i].type == 'credit'){
        //         console.log('es credito')
        //         credito = credito + a[i].aumount
        //      } else if(a[i].type == 'debit'){
        //         console.log('es debito')
        //         debito = debito - a[i].aumount
        //       }
        //   }
        //   total = credito + debito;
        //   console.log(total)
    })
    .catch(error => {
        console.log('Se produjo un error', error)
    })
}



function postDebit(req, res, next){
    const transaction =  new Transaction({
        // id_trans : uuidv1(),
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
    // var arr = [];
    // arr.push(transaction);

    //const f = getTotal();
    console.log(t)
    // if(req.body.aumount > f){
    //     transaction.save()
    // } else {
    //     console.log('no tiene fondos')
    // }





    // transaction.save()
    // .then(resolve => {
    //     res.send(resolve)
    // })
    // .catch(error => {
    //     console.log('Se produjo un error', error)
    //     next(error)
    // })
}





    // total.map(function(element){
    //     return element.aumount
    //   })
    // .reduce(function(prev, element, index, sum){
    //     return prev + element
    // }, 0)

    // if(req.body.aumount > total){
    //     transaction.save()
    //     .then(resolve => {
    //         res.send(resolve)
    //     })
    //     .catch(error => {
    //         console.log('Se produjo un error', error)
    //         next(error)
    //     })
    // } else {
    //     console.log('saldo insuficiente')
    // }












module.exports = {postDebit, postCredit, getTransactions}