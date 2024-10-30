(
    function () {

        'use strict';

        angular.module('app',[])

        .constant('API_PATH', (window.location.protocol == 'https:') ? `${window.location.protocol}//${window.location.hostname}/v${version.replace(".", "_")}/restphp/` : `${window.location.protocol}//${window.location.hostname}/src/restphp/`)

        // local
        .constant('NODE_API_PATH', 'https://kalvi20-bqezo683.b4a.run/')

        .controller('mainController',function(){

            console.log('checking main controller');
        })
        
    }
)();