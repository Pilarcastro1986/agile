
angular
.module('list', ['ui.bootstrap', 'angularMoment'])
.component('listComponent', {
    bindings: {},
    templateUrl : 'app/list.html',
    controller : listCtrl
})

appCtrl.$inject = ['serviceMain']

function listCtrl($scope, serviceMain){
    serviceMain.getTransactions()
    .then(response => {
        this.transactions = response.data;
        console.log('art', this.transactions)
   }).catch(error => {
       this.error = 'No Soup For You! Please login'
   })

}