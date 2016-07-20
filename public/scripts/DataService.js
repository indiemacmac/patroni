// angular.module('olympianApp').factory('DataService', function($http){
//   function getPeople(){
//   $http.get('/people').then(handlePeopleSuccess, handleFailure);
//   }
//   function getPatronsues(){
//   $http.get('/patronuses').then(handlePatronSuccess, handleFailure);
//   }
//   function handlePeopleSuccess(response) {
//     $scope.people = response.data.rows;
//     console.log('Success', response);
//     console.log($scope.people);
//   }
//   function handlePatronSuccess(response) {
//     $scope.patronuses = response.data;
//     console.log('Success', response);
//     console.log($scope.patronuses);
//   }
//   function handlePostPeople(response){
//     console.log('success', response)
//   }
//
//   function handleFailure(response) {
//     console.log('Failure', response);
//   }
// })
