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
  .controller('HeaderCtrl', function ($scope){
    $scope.title = "This is the header";
  })
  .controller('SidebarCtrl', function ($http, $scope){
    $scope.title = "This is the sidebar";
    $scope.users = [];
    var getUsers = function () {
      $http.get('http://hipstrchat.herokuapp.com/users')
        .success(function(data){
          console.log(data);
          $scope.users = data;
        })
        .error(function(data){
          console.log('error', data);
          return data;
        });
    };
    getUsers();
  })
  .controller('MessagesCtrl', function ($scope, $http){
    $scope.title = "This is the messages";
    $scope.messages = [];
    var getMessages = function () {
      $http.get('http://hipstrchat.herokuapp.com/rooms/1')
        .success(function(data){
          console.log('messages',data);
          $scope.messages = data.messages;
        })
        .error(function(){
          console.log('error');
        })
    };
    getMessages();

    $scope.sendMessage = function (form) {
      var req = {
                 method: 'POST',
                 url: 'http://hipstrchat.herokuapp.com/rooms/1/messages',
                 headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 data: {text: $scope.data.text, user_id: 1},
                }

      $http(req)
      .success(function(){
        form.$setPristine();
        getMessages();
      })
      .error(function(data){
        console.log(data, req)
      })
      // var req = new XMLHttpRequest();
      // req.open('post','http://hipstrchat.herokuapp.com/rooms/1/messages',true);
      // req.send();
      // $http.post('http://hipstrchat.herokuapp.com/rooms/1/messages', {text: $scope.data.text, user_id: 1})
      // .success(function(){
      //   form.$setPristine();
      //   getMessages();
      // })
    }
  });
