
(function() {
    'use strict';

    angular.module('app.mainPage.authentication', []).config(moduleConfig);

    function moduleConfig($stateProvider) {
        
        console.log('check-config');


        $stateProvider
        .state('authentication', {
            abstract: true,
            views: {
                'root': {
                    templateUrl: 'app/authentication/layouts/authentication.tmpl.html',
                    controller: 'authenticationController'
                }
            }
        })
        
        .state('authentication.main', {
          url: '/login',
          templateUrl: 'app/authentication/login/mainPage.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        });
    }

})();