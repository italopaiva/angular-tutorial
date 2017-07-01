(function(){
    'use strict';

    angular.module('app.auth').controller('LoginController', LoginController);

    LoginController.$inject = [];

    function LoginController(){
        var vm = this;

        vm.login = login;

        vm.user = {
            username: '',
            password: ''
        };

        function login(){
            // Perform the login operation here
        }
    }
})();