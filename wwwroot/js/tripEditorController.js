// tripEditorController.js

(function() {
    "use strict";
    angular.module("app-trips")
        .controller("tripEditorController", tripEditorController);

    function tripEditorController($routeParams, $http) {
        var vm = this;

        vm.tripName = $routeParams.tripName;
        vm.stops = [];
        vm.isBusy = true;
        vm.errorMessage = "";

        $http.get("/api/trips/" + vm.tripName + "/stops")
            .then(function(response) {
                angular.copy(response.data, vm.stops);
            }, function(error) {
                vm.errorMessage = "Failed to load stops";
            })
            .finally(function() {
                vm.isBusy = false;
            });
    }
})();