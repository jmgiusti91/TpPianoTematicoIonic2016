angular.module('starter.controllers', [])

.controller('PianoCtrl', function($scope, $ionicPlatform, $timeout, $cordovaNativeAudio, $cordovaVibration, $cordovaFile) {

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
            console.log(msg);
          }, function (error) {
            console.log(error);
          });

    } catch(ex){
      console.log(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('trueno', 'mp3/trueno.mp3')
          .then(function (msg) {
            console.log(msg);
          }, function (error) {
            console.log(error);
          });
    } catch(ex){
      console.log(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('fuego', 'mp3/fuego.mp3')
          .then(function (msg) {
            console.log(msg);
          }, function (error) {
            console.log(error);
          });
    } catch(ex){
      console.log(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('bosque', 'mp3/bosque.mp3')
          .then(function (msg) {
            console.log(msg);
          }, function (error) {
            console.log(error);
          });
    } catch(ex){
      console.log(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('mar', 'mp3/mar.mp3')
          .then(function (msg) {
            console.log(msg);
          }, function (error) {
            console.log(error);
          });
    } catch(ex){
      console.log(ex);
    }


    try{
        $cordovaNativeAudio
          .preloadSimple('tornado', 'mp3/tornado.mp3')
          .then(function (msg) {
            console.log(msg);
          }, function (error) {
            console.log(error);
          });

    } catch(ex){
      console.log(ex);
    }
        
    });

  $scope.Sonar=function(queSuena){

    try{
      $cordovaNativeAudio.play(queSuena);
    } catch(ex){
      console.log(ex);
    }
    

    try{
        $cordovaVibration.vibrate(1000);
    } catch(ex){
      console.log(ex);
    }

    $scope.toco = true;
      switch(queSuena){

        case 'lluvia':

          $("#lluvia").addClass("girando");
          $scope.ruta = "mp3/lluvia.mp3\n";

        break;

        case 'trueno':

          $("#trueno").addClass("girando");
          $scope.ruta = "mp3/trueno.mp3\n";

        break;

        case 'fuego':

          $("#fuego").addClass("girando");
          $scope.ruta = "mp3/fuego.mp3\n";

        break;

        case 'bosque':

          $("#bosque").addClass("girando");
          $scope.ruta = "mp3/bosque.mp3\n";

        break;

        case 'mar':

          $("#mar").addClass("girando");
          $scope.ruta = "mp3/mar.mp3\n";

        break;

        case 'tornado':

          $("#tornado").addClass("girando");
          $scope.ruta = "mp3/tornado.mp3\n";

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


    $ionicPlatform.ready(function(){
      try{

        $cordovaFile.checkFile(cordova.file.externalDataDirectory, "rutamp3.txt")
          .then(function (success) {

            $cordovaFile.writeExistingFile(cordova.file.externalDataDirectory, "rutamp3.txt", $scope.ruta)
                .then(function (success) {

                }, function (error) {
                  // error
                });


          }, function (error) {
            
            $cordovaFile.createFile(cordova.file.externalDataDirectory, "rutamp3.txt", true)
              .then(function (success) {

              }, function (error) {

              });


            $cordovaFile.writeFile(cordova.file.externalDataDirectory, "rutamp3.txt", $scope.ruta, true)
              .then(function (success) {

              }, function (error) {

              });
          });

      } catch(ex){
        console.log(ex.message);
      }
      


    });
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
