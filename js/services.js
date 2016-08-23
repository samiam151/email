app.factory('EmailService', ['$http', function($http){
    return{
        getAllEmails: function(){
            return $http.get('php/getAllEmails.php');
        },
        getEmail: function(id){
            var data = JSON.stringify({id: id}),
                config = {
                    headers : {'Content-Type': 'application/json; charset=utf-8;'}
                };
            return $http.post('php/getEmail.php', data, config);
        },
        deleteEmail: function(id){
            var data = JSON.stringify({id: id});
            return $http.post('php/deleteEmail.php', data);
        }
    }
}]);