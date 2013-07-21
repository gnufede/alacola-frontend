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

   $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();
  $scope.minDate = $scope.dt;
  $scope.hstep = 1;
  $scope.mstep = 15;
  $scope.ismeridian = false;
  $scope.isCollapsed = true;

  $scope.pedirCitaButton = function(){
      return ($scope.isCollapsed)? 'Pedir cita':'Cancelar';
  }

  $scope.items = [
  {"id":"09:00", "name": "09:00"},
  {"id":"09:30", "name": "09:30"},
  {"id":"10:00", "name": "10:00"},
  {"id":"10:30", "name": "10:30"},
  {"id":"11:00", "name": "11:00"},
  {"id":"11:30", "name": "11:30"},
  {"id":"12:00", "name": "12:00"},
  {"id":"12:30", "name": "12:30"},
  {"id":"13:00", "name": "13:00"},
  {"id":"13:30", "name": "13:30"}
      ];

  $scope.atems =  [
     "09:00",
     "09:30",
     "10:00",
     "10:30",
     "11:00",
     "11:30",
     "12:00",
     "12:30",
     "13:00",
     "13:30",
     "17:00",
     "17:30",
     "18:00",
     "18:30",
     "19:00",
     "19:30"
      ];

  $scope.choice = '10:30';

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

}



//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
