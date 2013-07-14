'use strict';

/* App Module */

angular.module('alacola', ['alacolaFilters']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/places/:placeId', {templateUrl: 'partials/date-list.html',   controller: PlaceListCtrl}).
      when('/profesionales', {templateUrl: 'partials/date-list.html',   controller: DateListCtrl}).
      when('/profesionales/:dateId', {templateUrl: 'partials/date-detail.html', controller: DateDetailCtrl}).
      otherwise({redirectTo: '/profesionales'});
}]);
