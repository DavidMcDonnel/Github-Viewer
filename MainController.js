// Code goes here

/**var work = function(){
  console.log("working hard!");
};

var doWork = function(f){
  console.log("starting");
  try{
    f();
  }catch(er){
    console.log(er);
  }
  console.log("finished");
};

doWork(work);*/

/*(function() {

  var createWorker = function() {

    var workCount = 0;

    var task1 = function() {
      ++workCount;
      console.log("task1 " + workCount);
    };

    var task2 = function() {
      ++workCount;
      console.log("task2 " + workCount);
    };
    return {
      job1: task1,
      job2: task2
    };
  };

  var worker = createWorker();

  worker.job1();
  worker.job2();
}());*/
//var myApp = angular.module('githubViewer', []);
(function(){
var myApp = angular.module('githubViewer');

//myApp.controller('MainController', ['$scope','$interval','$location',
  var MainController = function($scope,$interval,$location) {
    
    $scope.search = function(username){
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown= null;
      }
      $location.path("/user/"+username);
    };
    
    var decrementCountdown = function(){
      $scope.countdown -= 1;
      if($scope.countdown < 1){
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval = null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    
    /*var person = {
      firstName: "David",
      lastName: "McDonnel",
      imageSrc: "http://wallpoper.com/images/00/39/04/95/dragons-fantasy_00390495.jpg"
    };*/
    $scope.username = "wustladela";
    $scope.countdown = 5;
    startCountdown();
    //$scope.person = person;
  };
  myApp.controller("MainController",MainController);

}());
