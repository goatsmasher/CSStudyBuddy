angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) { })


  .controller('SettingsCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };

  })

  .controller("StudyCtrl", function ($scope, $stateParams, subjectFactory) {
    var currentQ = 0;
    $scope.questions = subjectFactory.all();
    $scope.question = $scope.questions[currentQ];
    $scope.current = currentQ;

    $scope.nextQuestion = function () {
      if (currentQ != $scope.questions.length -1) {
        currentQ += 1;
        $scope.current += 1;
        $scope.question = $scope.questions[currentQ];
        console.log("next")
      }
    }
    $scope.prevQuestion = function () {
      if (currentQ != 0) {
        currentQ -= 1;
        $scope.current -= 1;
        $scope.question = $scope.questions[currentQ];
        console.log("prev")
      }
    }
  });

