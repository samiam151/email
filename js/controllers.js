app.controller('InboxController', ['EmailService', '$scope', function(email, $scope){
    email.getAllEmails().then(function(res){
        $scope.emails = res.data.emails;
    })
}]);

app.controller('MessageController', ['EmailService', '$scope', '$routeParams', function(email, $scope, $routeParams){
    var id = $routeParams.id;
    email.getEmail(id).then(function(res){
        console.log(res.data);
        $scope.message = res.data.message;
    });
}]);