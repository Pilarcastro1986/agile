const Transaction = require(`${process.env.PWD}/server/mongo/models/transaction.js`)


module.exports = function getTotal(){
    Transaction.find()
    .then(resolve => {
        const a = resolve
        const total = a.map(function(element){
            return element.aumount
        })
        .reduce(function(prev, element, index, sum){
            return prev + element
        }, 0)
        console.log('toaaatal', total)
    })
}