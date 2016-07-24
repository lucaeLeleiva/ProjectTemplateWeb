app.controller('OwnerController', ['$scope', 'owner', function($scope, owner) {
  owner.success(function(data) {
    $scope.owner = data;
  });
}]);
