angular.module('hipstrchat')
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