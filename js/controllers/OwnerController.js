app.controller('OwnerController', ['$scope', 'owners', function($scope, owners) {
  ownesr.success(function(data) {
    $scope.owner = data;
  });
}]);
