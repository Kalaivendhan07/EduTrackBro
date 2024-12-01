
(function(){

    'use strict';

    angular.module('app', [ 
        'ui.router',
        'app.main',
        'triangular'
    ])

    .constant('NODE_API_PATH', 'https://kalvi20-bqezo683.b4a.run/')
    
    .controller('mainController', function($scope,$rootScope,$window, $http,NODE_API_PATH,$state) {

        $scope.firstName = "kalaivendhan";
        $scope.lastName = "Doe";

        
    
        console.log(NODE_API_PATH,'node api path');

        const Url_path = window.location.href.split('/');

        // console.log($rootScope,'root scope');

        // console.log(Url_path,'urlpath');

        // if(Url_path[4]=="eduTrackPro.html?"){

            // console.log('check1');
            
            // $state.go('login');
        // }
        
    });

})();


