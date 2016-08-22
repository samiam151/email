app.controller('InboxController', ['EmailService', '$scope', function(email, $scope){
    email.getAllEmails().then(function(res){
        $scope.emails = res.data.emails;
    })
}]);