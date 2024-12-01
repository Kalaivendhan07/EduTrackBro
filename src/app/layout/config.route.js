(function () {
    'use strict';

    angular
        .module('triangular')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('triangular', {
                abstract: true, // Parent state for shared layout
                views: {
                    'root': {
                        templateUrl: 'layout/dashboard.setup.temp.html', // Root layout
                        controller: 'MainLayoutController',
                        controllerAs: 'vm'
                    },
                    'sidebarLeft@app': {
                        templateProvider: function ($templateRequest, layoutService) {
                            // Dynamically fetch the sidebar template
                            if (angular.isDefined(layoutService.sidebarLeftTemplateUrl)) {
                                return $templateRequest(layoutService.sidebarLeftTemplateUrl);
                            }
                        },
                        controllerProvider: function (layoutService) {
                            // Dynamically fetch the sidebar controller
                            return layoutService.sidebarLeftController;
                        },
                        controllerAs: 'vm' // Use "vm" alias for the controller
                    },
                    'toolbar@app': {
                        templateProvider: function ($templateRequest, layoutService) {
                            // Dynamically fetch the toolbar template
                            if (angular.isDefined(layoutService.toolbarTemplateUrl)) {
                                return $templateRequest(layoutService.toolbarTemplateUrl);
                            }
                        },
                        controllerProvider: function (layoutService) {
                            // Dynamically fetch the toolbar controller
                            return layoutService.toolbarController;
                        },
                        controllerAs: 'vm'
                    }
                }
            })
    }
})();
