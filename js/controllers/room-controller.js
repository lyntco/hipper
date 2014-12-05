angular.module('hipstrchat')
  .controller('RoomCtrl', function($stateParams, $http, $scope){
    $scope.messages = [];
    console.log($stateParams);

    var getRoom = function () {
      console.log('getting messages');
      $http.get('http://hipstrchat.herokuapp.com/rooms/'+ $stateParams.id )
      .success(function (data) {
        console.log(data)
        $scope.messages = data.messages;
        $scope.room = data.room;
      }).error(function(data){
        console.log(data)
      })
    }
    getRoom();

    setInterval(function(){
      console.log('getting messages')
      getRoom();
    }, 5000);

    $scope.sendMessage = function (form) {
      var req = {
                 method: 'POST',
                 url: 'http://hipstrchat.herokuapp.com/rooms/1/messages',
                 headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 data: {text: $scope.data.text, user_id: 1},
                };

      form.$setPristine();
      $scope.data.text = '';
      $http(req)
      .success(function(){
        getRoom();
      })
      .error(function(data){
        console.log(data, req)
      })
    }
  })