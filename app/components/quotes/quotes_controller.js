app.controller('quotes_controller', function($scope, $http){
  $scope.header = {name: "quotes_view.html", url: "quotes_view.html"};
  
  var url = "../assets/data/quotes.json";
  $http.get(url).success( function(response){
    $scope.quotes = response;
  });
});
