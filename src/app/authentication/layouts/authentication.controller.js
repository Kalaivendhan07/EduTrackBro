(function () {
    'use strict';

    angular
        .module('app.mainPage.authentication')
        .controller('authenticationController', authenticationController);

    /* @ngInject */
    function authenticationController($scope) {

        $scope.isteer_bgs = ["iSteer-01", "iSteer-02", "iSteer-03", "iSteer-04", "iSteer-05"];

        $scope.random_number = Math.floor(Math.random() * $scope.isteer_bgs.length);
    }
})();