angular.module('starter.controllers', [])

.controller('PianoCtrl', function($scope, $ionicPlatform, $timeout, $cordovaNativeAudio, $cordovaVibration) {

$scope.Empezar=function(){
    $scope.Ver = true;

    $("#ion-cont").removeClass("fondo-inicio");
    $("#ion-cont").addClass("fondo-juego");
  }


$ionicPlatform.ready(function() {

    try{

        $cordovaNativeAudio
          .preloadSimple('lluvia', 'mp3/lluvia.mp3')
          .then(function (msg) {
            alert(msg);
          }, function (error) {
            alert(error);
          });

    } catch(ex){
      alert(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('trueno', 'mp3/trueno.mp3')
          .then(function (msg) {
            alert(msg);
          }, function (error) {
            alert(error);
          });
    } catch(ex){
      alert(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('fuego', 'mp3/fuego.mp3')
          .then(function (msg) {
            alert(msg);
          }, function (error) {
            alert(error);
          });
    } catch(ex){
      alert(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('bosque', 'mp3/bosque.mp3')
          .then(function (msg) {
            alert(msg);
          }, function (error) {
            alert(error);
          });
    } catch(ex){
      alert(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('mar', 'mp3/mar.mp3')
          .then(function (msg) {
            alert(msg);
          }, function (error) {
            alert(error);
          });
    } catch(ex){
      alert(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('tornado', 'mp3/tornado.mp3')
          .then(function (msg) {
            alert(msg);
          }, function (error) {
            alert(error);
          });

    } catch(ex){
      alert(ex);
    }
        
    });

  $scope.Sonar=function(queSuena){

    try{
      $cordovaNativeAudio.play(queSuena);
    } catch(ex){
      alert(ex);
    }
    

    try{
        $cordovaVibration.vibrate(1000);
    } catch(ex){
      alert(ex);
    }

    $scope.toco = true;
      switch(queSuena){

        case 'lluvia':

          $("#lluvia").addClass("girando");

        break;

        case 'trueno':

          $("#trueno").addClass("girando");

        break;

        case 'fuego':

          $("#fuego").addClass("girando");

        break;

        case 'bosque':

          $("#bosque").addClass("girando");

        break;

        case 'mar':

          $("#mar").addClass("girando");

        break;

        case 'tornado':

          $("#tornado").addClass("girando");

        break;

        default:
        break;

      }

    $timeout(function(){
    $scope.toco = false;
    $("#lluvia").removeClass("girando");
    $("#trueno").removeClass("girando");
    $("#fuego").removeClass("girando");
    $("#bosque").removeClass("girando");
    $("#mar").removeClass("girando");
    $("#tornado").removeClass("girando");

    }, 4000)
  }

})

.controller('AutorCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})
