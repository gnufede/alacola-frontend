'use strict';

/* App Module */

angular.module('alacola', ['ui.bootstrap']);
var DatepickerDemoCtrl = function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.showWeeks = false;
  $scope.toggleWeeks = function () {
    $scope.showWeeks = ! $scope.showWeeks;
  };

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = ( $scope.minDate ) ? null : new Date();
  };
  $scope.toggleMin();
};

angular.module('alacola', ['alacolaFilters']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/places/:placeId', {templateUrl: 'partials/date-list.html',   controller: PlaceListCtrl}).
      when('/profesionales', {templateUrl: 'partials/date-list.html',   controller: DateListCtrl}).
      when('/profesionales/:dateId', {templateUrl: 'partials/date-detail.html', controller: DateDetailCtrl}).
      otherwise({redirectTo: '/profesionales'});
}]);
