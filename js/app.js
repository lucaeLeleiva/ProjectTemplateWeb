var app = angular.module('GalleryApp', ['ngRoute']);
app.config(function ($routeProvider) { 
    $routeProvider 
        .when('/', { 
            controller: 'HomeController', 
            templateUrl: 'ProjectTemplateWeb/views/home.html' 
        })
        .when('/photos/:id',{
      	    controller: 'PhotoController',
            templateUrl: 'ProjectTemplateWeb/views/photo.html'
      
        })
        .otherwise({ 
          redirectTo: 'ProjectTemplateWeb/' 
        }); 
});
