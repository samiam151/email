app.factory('EmailService', ['$http', function($http){
    return{
        getAllEmails: function(){
            return $http.get('php/getAllEmails.php');
        }
    }
}]);