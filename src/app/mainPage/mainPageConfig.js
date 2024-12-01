(
    function () {

        'use strict';

        angular.module('app.main',[]).config(moduleConfig);

        function moduleConfig($stateProvider,$urlRouterProvider) {

             
            // $urlRouterProvider.otherwise('/home');

            $stateProvider

            .state('home',{
                url: '/home',
                templateUrl: 'app/mainPage/home.temp.html',
                controller: 'homeController',
                params: {
                    user_login: {}
                }
            })

            .state('login',{
                url: '/login?id',
                templateUrl: 'app/mainPage/login.temp.html',
                controller: 'loginController',
                controllerAs: 'vm',
                params: {
                    user_login: {}
                }
            })
            
        }
        
    }
)();