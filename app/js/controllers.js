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

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
