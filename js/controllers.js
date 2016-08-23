app.controller('InboxController', ['EmailService', '$scope', function(email, $scope){
    $scope.emails;
    
    email.getAllEmails().then(function(res){
        $scope.emails = res.data.emails;
    });

    $scope.deleteEmail = function(message_id){
        // email.deleteEmail(message_id);
    };
}]);

app.controller('MessageController', ['EmailService', '$scope', '$routeParams', function(email, $scope, $routeParams){
    var id = $routeParams.id;
    email.getEmail(id).then(function(res){
        console.log(res.data);
        $scope.message = res.data.message;
    });
}]);