'use strict';

/* Controllers */

function PlaceListCtrl($scope, $routeParams, $http) {
  $http.get('dates/' + $routeParams.placeId + '.json').success(function(data) {
    $scope.dates = data;
  });

  $scope.orderProp = 'age';
}

function DateListCtrl($scope, $http) {
  $http.get('dates/dates.json').success(function(data) {
    $scope.dates = data;
    //TODO:add class active to profesionales-link
  });

  $scope.orderProp = 'age';

}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function DateDetailCtrl($scope, $routeParams, $http) {
  $http.get('dates/' + $routeParams.dateId + '.json').success(function(data) {
    $scope.date = data;
    $scope.mainImageUrl = data.image;
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

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
//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
