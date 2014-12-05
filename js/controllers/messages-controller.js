angular.module('hipstrchat')
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

    setInterval(function(){
      console.log('getting messages')
      getMessages();
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
        getMessages();
      })
      .error(function(data){
        console.log(data, req)
      })
    }
  });