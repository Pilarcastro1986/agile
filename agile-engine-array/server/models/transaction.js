const uuidv1 = require('uuid/v1');

module.exports = 

    function Transaction({type, aumount}) {
        this.id = uuidv1(),
        this.type = type,
        this.aumount = aumount,
        this.effectiveDate = new Date()
    } 



