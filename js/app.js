var app = angular.module('App-Generica', ['ngRoute']);
app.config(function ($routeProvider) { 
    $routeProvider 
        .when('/', { 
            controller: 'HomeController', 
            templateUrl: '/views/home.html' 
        })
        .when('/articles/:id',{
      	    controller: 'ArticleController',
            templateUrl: '/views/article.html'
      
        })
        .otherwise({ 
          redirectTo: '/' 
        }); 
});
