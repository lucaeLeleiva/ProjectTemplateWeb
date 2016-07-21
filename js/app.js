var app = angular.module('App-Generica', ['ngRoute']);
app.config(function ($routeProvider) { 
    $routeProvider 
        .when('/', { 
            controller: 'HomeController', 
            templateUrl: '../ProjectTemplateWeb/views/home.html' 
        })
        .when('/articles/:id',{
      	    controller: 'ArticleController',
            templateUrl: '../ProjectTemplateWeb/views/article.html'
      
        })
        .otherwise({ 
          redirectTo: '/' 
        }); 
});
