// tripsController.js

(function() {
    "use strict";
    angular.module("app-trips")
        .controller("tripsController", tripsController);

    function tripsController($http) {
        var vm = this;

        vm.trips = [];

        vm.newTrip = {};

        vm.errorMessage = "";

        $http.get("/api/trips")
            .then(function(response) {
                angular.copy(response.data, vm.trips);
            }, function(error) {
                vm.errorMessage = "Failed to load data: " + error;
            });

        vm.AddTrip = function() {
            vm.trips.push({
                name: vm.newTrip.name,
                created: new Date()
            });

            vm.newTrip = {};
        };
    }
})();