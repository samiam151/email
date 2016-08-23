app.factory('EmailService', ['$http', function($http){
    return{
        getAllEmails: function(){
            return $http.get('php/getAllEmails.php');
        },
        getMessage: function(id){
            var data = JSON.stringify({id: id}),
                config = {
                    headers : {'Content-Type': 'application/json; charset=utf-8;'}
                };
            return $http.post('php/getMessage.php', data, config);
        }
    }
}]);