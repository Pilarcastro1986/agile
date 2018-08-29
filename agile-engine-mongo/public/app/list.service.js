
angular 
    .module('app')
    .service('serviceMain', serviceMain)


    function serviceMain($http){
        this.getTransactions = function(){
            return $http({
            url : '/api/v1/transactions',
            method: 'GET'
        })
    }
}

