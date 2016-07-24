var app = angular.module('App-Generica', ['ngRoute']);
app.config(function ($routeProvider) { 
    $routeProvider 
        .when('/ProjectTemplateWeb', { 
            controller: 'HomeController', 
            templateUrl: '../ProjectTemplateWeb/views/home.html' 
        })
        .when('/ProjectTemplateWeb/articles/:id',{
      	    controller: 'ArticleController',
            templateUrl: '../ProjectTemplateWeb/views/article.html'
      
        })
        .otherwise({ 
          redirectTo: 'https://lucaeleleiva.github.io/ProjectTemplateWeb/'
        }); 
});
