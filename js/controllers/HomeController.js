app.controller('HomeController', ['$scope', 'articles', 'owner', function($scope, articles, owner) {
  articles.success(function(data) {
    $scope.articles = data;
  });
  owner.success(function(data) {
    $scope.owner = data;
  });
}]);
