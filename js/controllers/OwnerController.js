app.controller('OwnerController', ['$scope', 'owners', function($scope, owners) {
  owners.success(function(data) {
    $scope.owner = data;
  });
}]);
