const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Transaction = Schema({
    // id_trans : String,
    type : String,
    aumount : Number,
    effectiveDate : Number
})

module.exports = mongoose.model('Transaction', Transaction)





