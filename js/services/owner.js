app.factory('owner', ['$http', function($http) {
  return $http.get('https://lucaeleleiva.github.io/ProjectTemplateWeb/data/empresa.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]););
