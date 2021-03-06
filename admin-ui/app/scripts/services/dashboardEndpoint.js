'use strict';

var upsServices = angular.module('upsConsole.services');
  
upsServices.factory('dashboardEndpoint', function ($resource) {
  return $resource('rest/metrics/dashboard/:verb', {}, {
    totals: {
      method: 'GET'
    },
    warnings: {
      method: 'GET',
      isArray: true,
      params: {
        verb: 'warnings'
      }
    },
    topThree: {
      method: 'GET',
      isArray: true,
      params: {
        verb: 'active'
      }
    }
  });
});