angular.module('myApp', []).controller('namesCtrl', function($scope) {
  $scope.names = [
    {
      resource: 'https://angular.io/',
      info: 'Angulari ametlik lehekülg, kus on kuvatud palju kasulikku materjali.'
    },
    {
      resource: 'https://www.w3schools.com/angular/default.asp',
      info: ' w3schooli õpetused, näited ja testimine.'
    },
    {
      resource:
        'https://youtu.be/z4JUm0Bq9AM',
      info: 'YouTube´i video, kus õpetatakse, kuidas Angulariga alustada.'
    },
    {
      resource: 'https://www.tutorialspoint.com/angularjs/',
      info: 'Laialdased koodinäited AngularJS õppimiseks.'
    },
    {
      resource:
        'https://www.codecademy.com/learn/learn-angularjs',
      info: 'Codeacademy õpetus ja ülesanded.'
    }
  ];
});