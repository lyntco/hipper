angular.module('hipstrchat')
  // .controller('AppCtrl', function($scope){
  //   console.log('app ctrl is loaded');
  //   $scope.title = "heroes";

  //   $scope.heroes = [
  //     'Superman',
  //     'Batman',
  //     'Catwoman',
  //     'Spiderman'
  //     ];

  //   $scope.buttonClicked = function () {
  //     alert('You clicked this button');
  //   };
  // })
  .controller('HeaderCtrl', function($scope){
    $scope.title = "This is the header";
  })
  .controller('SidebarCtrl', function($scope){
    $scope.title = "This is the sidebar";
  })
  .controller('MessagesCtrl', function($scope){
    $scope.title = "This is the messages";
  });
