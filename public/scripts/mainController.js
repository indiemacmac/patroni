angular.module('patronApp').controller('MainController', function($scope, DataService){
  $scope.data = DataService.data;
  $scope.submitName = function(){
    var sendData = {};
    var nameArray = [];
    nameArray=$scope.nameIn.split(" ");
    sendData.first_name = nameArray[0];
    sendData.last_name = DataService.getLastName(nameArray);
    console.log(sendData);
    DataService.submitName(sendData);
    $scope.data.people.push(sendData);
  }
  $scope.submitPatron = function(){
    var sendData = {};
    sendData.patronus_name = $scope.patronIn;
    DataService.submitPatron(sendData);
    $scope.data.patronuses.push(sendData);
  }
  // $scope.submitName = DataService.submitName(name);
  // $scope.submitPatron =  DataService.submitPatron(patron);
  $scope.getData=function(){
    console.log($scope.data);
    console.log(name);
  }
});
