var app = angular.module('patronApp', []);

app.controller('MainController', function($scope, $http){
  $scope.showError = false;
  $http.get('/people').then(handlePeopleSuccess, handleFailure);
  $http.get('/patronuses').then(handlePatronSuccess, handleFailure);
  function handlePeopleSuccess(response) {
    $scope.people = response.data;
    console.log('Success', response);
  }
  function handlePatronSuccess(response) {
    $scope.patronuses = response.data;
    console.log('Success', response);
  }

  function handleFailure(response) {
    console.log('Failure', response);
  }

  // function() {
  //
  // }
  //
  // function submitAll() {
  //
  // }
})
