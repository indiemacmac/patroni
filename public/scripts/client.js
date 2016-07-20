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
  function handlePostPeople(response){
    console.log('success', response)
  }

  function handleFailure(response) {
    console.log('Failure', response);
  }
  $scope.submitName = function(){
    var sendData = {};
    sendData.first_name = $scope.nameIn;
    console.log(sendData);
    $http.post('/people', sendData ).then(handlePostPeople,handleFailure);
  }
  $scope.submitPatron = function (){
    var sendData = {};
    sendData.patronus = $scope.patronIn;
    $http.post('/patronuses', sendData).then(handlePostPeople, handleFailure);
  }
})
