angular.module('patronApp').factory('DataService', function($http){
  var data = {};
  function getPeople(){
  $http.get('/people').then(handlePeopleSuccess, handleFailure);
  }
  function getPatronsues(){
  $http.get('/patronuses').then(handlePatronSuccess, handleFailure);
  }
  function handlePeopleSuccess(response) {
    data.people = response.data.rows;
    console.log('Success', response);
    console.log(data.people);
  }
  function handlePatronSuccess(response) {
    data.patronuses = response.data;
    console.log('Success', response);
    console.log(data.patronuses);
  }
  function handlePostPeople(response){
    console.log('success', response)
  }

  function handleFailure(response) {
    console.log('Failure', response);
  }
  function submitName(sendData){
    console.log(sendData);
    $http.post('/people', sendData).then(handlePostPeople,handleFailure);
  }
  function submitPatron (sendData){
    $http.post('/patronuses', sendData).then(handlePostPeople, handleFailure);
  }
  function getLastName(array){
    var lastname= "";
    for (var i=1; i<array.length; i++){
      lastname+=" "+array[i];
    }
    return lastname;
  }
  getPeople();
  getPatronsues();
  return{
    data: data,
    getPeople: getPeople,
    getPatronsues: getPatronsues,
    submitName: submitName,
    submitPatron: submitPatron,
    getLastName: getLastName
  }
});
