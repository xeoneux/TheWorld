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
                _showMap(vm.stops);
            }, function(error) {
                vm.errorMessage = "Failed to load stops";
            })
            .finally(function() {
                vm.isBusy = false;
            });
    }

    function _showMap(stops) {
        if (!!stops && stops.length > 0) {
            var mapStops = _.map(stops, function(stop) {
                return {
                    lat: stop.latitude,
                    long: stop.longitude,
                    info: stop.name
                };
            });

            travelMap.createMap({
                stops: mapStops,
                selector: "#map",
                currentStop: 1,
                initialZoom: 3
            });
        }
    }
})();