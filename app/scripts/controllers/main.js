'use strict';

/**
 * @ngdoc function
 * @name moneyWatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moneyWatchApp
 */
angular.module('moneyWatchApp')
  .controller('MainCtrl', function ($scope) {
      $scope.transactions = [{ title: 'Bus ticket', amount: 1000 }, { title: 'Stationary', amount: 1250 }, { title: 'Food', amount: 5000 }];
      $scope.transaction = null;

      $scope.addTransaction = function () {
          $scope.transactions.push($scope.transaction);
          $scope.transaction = null;
      };
      $scope.removeTransaction = function (index) {
          $scope.transactions.splice(index, 1);
      };
  });

angular.module('moneyWatchApp').directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(val) {
                if (val == undefined)
                    val = '';
                var transformedInput = val.replace(/[^0-9]/g, '');
                console.log(transformedInput);
                if (transformedInput !== val) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});