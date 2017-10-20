'use strict';

angular.
  module('deliverableApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/tickets', {
          template: '<ticket-list></ticket-list>'
        }).
        when('/tickets/:ticketId', {
          template: '<ticket-detail></ticket-detail>'
        }).
        otherwise('/tickets');
    }
  ]);
