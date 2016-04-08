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
        vm.newStop = {};
        vm.errorMessage = "";

        var url = "/api/trips/" + vm.tripName + "/stops";

        $http.get(url)
            .then(function(response) {
                angular.copy(response.data, vm.stops);
                _showMap(vm.stops);
            }, function(error) {
                vm.errorMessage = "Failed to load stops";
            })
            .finally(function() {
                vm.isBusy = false;
            });

        vm.addStop = function() {
            vm.isBusy = true;

            $http.post(url, vm.newStop)
                .then(function(response) {
                    vm.stops.push(response.data);
                    _showMap(vm.stops);
                    vm.newStop = {};
                }, function(error) {
                    vm.errorMessage = "Failed to add new stop";
                })
                .finally(function() {
                    vm.isBusy = false;
                });
        };
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