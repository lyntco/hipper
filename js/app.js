// var app = angular.module('hipstrchat', []);
// app.run();

angular.module('hipstrchat', ['ui.router']) //dependencies go in the array
  .config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");
  // $stateProvider.state('otherwise', {url: '/'})
    // steakProvider
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../partials/home.html',
      controller: 'HomeCtrl'
    })
    .state('rooms', {
      url: '/rooms',
      templateUrl: '../partials/rooms.html',
      controller: 'RoomsCtrl'
    })
    .state('room', {
      url: '/rooms/:id',
      templateUrl: '../partials/room.html',
      controller: 'RoomCtrl'
    })

  })
  .run(function(){
    console.log('angular is working');
  });