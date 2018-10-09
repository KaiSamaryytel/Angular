var app = angular.module('planetApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
  $routeProvider
      .when('/mercury', {
        templateUrl: "atmosphere.html",
        controller: "mercuryCtrl"
      })
      .when('/venus', {
        templateUrl: "atmosphere.html",
        controller: "venusCtrl"
      })
      .when('/earth', {
        templateUrl: "atmosphere.html",
        controller: "earthCtrl"
      })
      .when('/mars', {
        templateUrl: "atmosphere.html",
        controller: "marsCtrl"
      })
      .when('/jupiter', {
       templateUrl: 'atmosphere.html',
       controller: 'jupiterCtrl'
     });
 });

app.controller("mercuryCtrl", function($scope, $route) {
  $scope.planet = {
    name: 'Näide 1',
    carbondioxide: 'https://codepen.io/kai-samar-tel/pen/QZjQyG',
    nitrogen: 'img/ex1.jpg',
    oxygen: 'Mouse over me!'
    
  };
});

app.controller('venusCtrl', function($scope, $route) {
  $scope.planet = {
    name: 'Näide 2 ',
    carbondioxide: 'https://codepen.io/kai-samar-tel/pen/jebZbV',
    nitrogen: 'img/ex2.jpg',
    oxygen: 'Disables/enables ng.'
  };
});

app.controller("earthCtrl", function($scope, $route) {
  $scope.planet = {
    name: 'Näide 3',
    carbondioxide: 'https://codepen.io/kai-samar-tel/pen/oajEva',
    nitrogen: 'img/ex3.jpg',
    oxygen: 'Validation controller.'
  };
});

app.controller("marsCtrl", function($scope, $route) {
  $scope.planet = {
    name: 'Näide 4',
    carbondioxide: 'https://codepen.io/kai-samar-tel/pen/MPardp',
    nitrogen: 'img/ex4.jpg',
    oxygen: 'Validation custom.'
    
  };
});

app.controller("jupiterCtrl", function($scope, $route) {
  $scope.planet = {
    name: 'Näide 5',
    carbondioxide: 'https://codepen.io/kai-samar-tel/pen/Xxmzjw',
    nitrogen: 'img/ex5.jpg',
    oxygen: 'Select app.'
  };
});

