'use strict';

/**
 * @ngdoc function
 * @name quiverCmsApp.controller:CommerceCtrl
 * @description
 * # CommerceCtrl
 * Controller of the quiverCmsApp
 */
angular.module('quiverCmsApp')
  .controller('CommerceCtrl', function ($scope, commerceRef, countries, states) {
    /*
     * Commerce
    */
    var commerce = commerceRef.$asObject();

    commerce.$bindTo($scope, 'commerce');

    /*
     * Countries
    */
    $scope.countries = countries;

    $scope.checkAllCountries = function () {
      _.each(countries, function (country) {
        if (!$scope.commerce.countries[country['alpha-2']]) {
          $scope.commerce.countries[country['alpha-2']] = {};
        }

        $scope.commerce.countries[country['alpha-2']].enabled = true;

      });

    };

    $scope.uncheckAllCountries = function () {
      _.each(countries, function (country) {
        if ($scope.commerce.countries[country['alpha-2']] && $scope.commerce.countries[country['alpha-2']].enabled) {
          $scope.commerce.countries[country['alpha-2']].enabled = false;
        }
      });
    };

    /*
     * States
    */
    $scope.states = states;

    $scope.checkAllStates = function () {
      _.each(states, function (state) {
        if (!$scope.commerce.states[state.abbreviation]) {
          $scope.commerce.states[state.abbreviation] = {};
        }

        $scope.commerce.states[state.abbreviation].enabled = true;

      });

    };

    $scope.uncheckAllStates = function () {
      _.each(states, function (state) {
        if ($scope.commerce.states[state.abbreviation] && $scope.commerce.states[state.abbreviation].enabled) {
          $scope.commerce.states[state.abbreviation].enabled = false;
        }
      });
    };

  });