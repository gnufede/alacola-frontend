'use strict';

/* App Module */

//angular.module('alacola', ['ui.bootstrap']);

angular.module('alacola', ['alacolaFilters', 'ui.bootstrap', '$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/places/:placeId', {templateUrl: 'partials/date-list.html',   controller: PlaceListCtrl}).
      when('/profesionales', {templateUrl: 'partials/date-list.html',   controller: DateListCtrl}).
      when('/profesionales/:dateId', {templateUrl: 'partials/date-detail.html', controller: DateDetailCtrl}).
      otherwise({redirectTo: '/profesionales'});
}]);
