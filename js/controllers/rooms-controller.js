angular.module('hipstrchat')
  .controller('RoomsCtrl', function($scope, $http, $state){
    var getRooms = function () {
      $http.get('http://hipstrchat.herokuapp.com/rooms.json').success(function(data){
        $scope.rooms = data;
      })
    };
    getRooms();

    $scope.goToRoom = function (room) {
      $state.transitionTo('room', {id: room.id});
    }
  })
