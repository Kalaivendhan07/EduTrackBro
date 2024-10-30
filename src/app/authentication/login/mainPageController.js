(function () {
    'use strict';

    angular
        .module('app.mainPage.authentication')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController() {
       
        console.log('check in the controller');
     
    }
    
})();