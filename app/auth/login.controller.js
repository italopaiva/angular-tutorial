(function(){
    'use strict';

    angular.module('app.auth').controller('LoginController', LoginController);

    LoginController.$inject = ['authService'];

    function LoginController(authService){
        var vm = this;

        vm.login = login;
        vm.status = '';

        vm.user = {
            username: '',
            password: ''
        };

        function login(){
            authService.authenticate(vm.user).then(function(userData){
                vm.status = 'Usuário autenticado!';
            }, function(){
                vm.status = 'Credenciais inválidas!';
            });
        }
    }
})();