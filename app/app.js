var app = angular.module('brandon', ['ngRoute']);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/resume',{
      templateUrl: "app/components/resume/resume_view.html",
      controller: "resume_controller"
    });

    $routeProvider.when('/',{
      templateUrl: "app/components/home/home_view.html",
      controller: "home_controller"
    });

    $routeProvider.when('/quotes',{
      templateUrl: "app/components/quotes/quotes_view.html",
      controller: "quotes_controller"
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
