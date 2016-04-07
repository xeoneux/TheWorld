// tripsController.js

(function() {
    "use strict";
    angular.module("app-trips")
        .controller("tripsController", tripsController);

    function tripsController() {
        var vm = this;
        vm.trips = [
            {
                name: "India Trip",
                created: new Date()
            },
            {
                name: "World Trip",
                created: new Date()
            }
        ];
    }
})();