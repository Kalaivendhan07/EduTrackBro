(
    function () {

        'use strict';

        angular.module('app.main').controller('loginController',loginController);

        function loginController($scope,$rootScope){
         // Flag to toggle forms
        $scope.user = {}; // Login user data
        $scope.newUser = {}; // Register user data
        $scope.errorMessage = '';

        // Toggle between login and register forms
        $scope.toggleForm = function() {
            $scope.showRegister = !$scope.showRegister;
            $scope.errorMessage = ''; // Clear error message when switching forms
        };

        // Function to switch to the registration form after a failed login
        $scope.switchToRegister = function() {
            $scope.showRegister = true; // Show the register form
            $scope.errorMessage = ''; // Clear any error message
        };

        // Login function
        $scope.login = function() {
            // $http.post('/api/login', $scope.user)
            //     .then(function(response) {
            //         if (response.data.success) {
            //             $state.go('dashboard'); // Redirect to dashboard if login is successful
            //         } else {
            //             $scope.errorMessage = 'Invalid email or password.';
            //         }
            //     })
            //     .catch(function() {
            //         $scope.errorMessage = 'An error occurred. Please try again later.';
            //     });

            $rootScope.isLoggedIn = true;

            console.log( $rootScope.isLoggedIn);

        };

        // Register function
        $scope.register = function() {
            // $http.post('/api/register', $scope.newUser)
            //     .then(function(response) {
            //         if (response.data.success) {
            //             $scope.showRegister = false; // Switch back to login on successful registration
            //             $scope.errorMessage = 'Registration successful. Please login.';
            //         } else {
            //             $scope.errorMessage = 'Registration failed. Please try again.';
            //         }
            //     })
            //     .catch(function() {
            //         $scope.errorMessage = 'An error occurred. Please try again later.';
            //     });
        };
        }
        
    }
)();