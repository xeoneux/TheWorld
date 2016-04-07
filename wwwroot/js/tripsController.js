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

        vm.newTrip = {};

        vm.AddTrip = function() {
            vm.trips.push({
                name: vm.newTrip.name,
                created: new Date()
            });

            vm.newTrip = {};
        };
    }
})();