app.controller('resume_controller', function($scope, $http){
  $scope.header = {name: "resume_view.html", url: "resume_view.html"};

  var url = "../assets/data/resume.json";
  $http.get(url).success( function(response){
    $scope.resume = response;
  });
});
