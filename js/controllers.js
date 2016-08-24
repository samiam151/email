app.controller('InboxController', ['EmailService', '$scope', function(email, $scope){
    $scope.emails = null;
    
    email.getAllEmails().then(function(res){
        $scope.emails = res.data.emails;
    });

    $scope.deleteEmail = function(selectedEmail){
        // Remove email from view
        var index = $scope.emails.indexOf(selectedEmail);
        $scope.emails.splice(index, 1);
        
        // Delete email in database
        // email.deleteEmail(selectedEmail.id);  
    };
}]);

app.controller('MessageController', ['EmailService', '$scope', '$routeParams', function(email, $scope, $routeParams){
    var id = $routeParams.id;
    email.getEmail(id).then(function(res){
        console.log(res.data);
        $scope.message = res.data.message;
    });
}]);