'use strict';

angular.module('myApp.card.card-directive', [])

.directive('card', [function() {
  return {
    restrict: 'E',
    templateUrl: '/components/card/card.html',
    scope: {
      country: '='
    },
    controller: function($scope) {
      
    }
  }
}]);