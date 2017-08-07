(function(){
    'use strict';
    angular.module('tableFixed').controller('tableFixedController', tableFixedController);

    function tableFixedController($scope, $timeout){
       $scope.headers = ['Nome', 'Nota', 'Aceleração', 'Frenagem', 'Derrapagem', 'Ultrapassagem', 'Batida'];

       $scope.data = [
           {nome : 'I', nota : 9, aceleracao : 1, frenagem : 2, derrapagem : 1, ultrapassagem : 10, batida : 1 },
           {nome : 'H', nota : 9.5, aceleracao : 1, frenagem : 2, derrapagem : 1, ultrapassagem : 10, batida : 1 },
           {nome : 'R', nota : 9.2, aceleracao : 1, frenagem : 2, derrapagem : 1, ultrapassagem : 10, batida : 1 }
       ];

       $scope.settings = {
                left : 1
        }
        


       $timeout(function(){
            $scope.data = [
                {nome : 'x', nota : 9, aceleracao : 1, frenagem : 2, derrapagem : 1, ultrapassagem : 10, batida : 1 },
                {nome : 'y', nota : 9.5, aceleracao : 1, frenagem : 2, derrapagem : 1, ultrapassagem : 10, batida : 1 },
                {nome : 'x', nota : 9.2, aceleracao : 1, frenagem : 2, derrapagem : 1, ultrapassagem : 10, batida : 1 },
                {nome : 'y', nota : 10, aceleracao : 1, frenagem : 2, derrapagem : 1, ultrapassagem : 10, batida : 1 },
                {nome : 'a', nota : 10, aceleracao : 1, frenagem : 2, derrapagem : 1, ultrapassagem : 10, batida : 1 }
            
            ];

            $scope.settings = {
                left : 1
            }

       },4000);

       

       $scope.incrementCount = function(){
           var leftAnt= $scope.count.left; 
           $scope.settings = {
               left : leftAnt + 1
           }
       }
    }
})();