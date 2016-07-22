app.controller('HomeController', ['$scope', 'articles', function($scope, articles) {
  articles.success(function(data) {
    $scope.articles = data;
  });
}]);
