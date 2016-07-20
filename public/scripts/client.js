var app = angular.module('patronApp', []);

app.controller('MainController', function($scope, $http){
  $scope.showError = false;

  function handleSuccess(response) {
    $scope. = response.data;
    console.log('Success', response);
  }
  
  function handleFailure(response) {
    console.log('Failure', response);
  }

  function() {

  }

  function submitAll() {

  }
})
