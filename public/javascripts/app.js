angular.module('Bucketlist', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.items = [];
    $scope.addItem = function() {
      var newItem = {title:$scope.formContent};
      $scope.formContent='';
      $http.post('/list', newItem).success(function(data){
        $scope.items.push(data);
      });
    };
    $scope.getAll = function() {
      return $http.get('/items').success(function(data){
        angular.copy(data, $scope.items);
      });
    };
    $scope.getAll();

    $scope.delete = function(items) {
     $http.delete('/items/' + item._id )
       .success(function(data){
         console.log("delete worked");
       });
     $scope.getAll();
   };

  }
]);
