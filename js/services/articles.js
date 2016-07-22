app.factory('articles', ['$http', function($http) {
  return $http.get('https://lucaeleleiva,github.io/ProjectTemplateWeb/data/hardcoded.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
