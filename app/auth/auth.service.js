(function(){
    'use strict';

    angular.module('app.auth').factory('authService', authService);

    authService.$inject = ['$http', '$q'];

    function authService($http, $q){

        return {
            authenticate: authenticate
        };

        function authenticate(credentials) {
            //
            // Code using backend authentication:
            //
            // var url = 'http://backend.URL.com/login';
            // return $http.post(url, credentials).then(function(userData){
            //     return userData;
            // });
            //

            // Mock:
            if(credentials.password == 'root'){
                return $q.resolve({
                    user: credentials.username,
                    email: credentials.username + '@mail.com'
                });
            }else{
                return $q.reject();
            }
        }
    }
})();