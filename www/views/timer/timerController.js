angular.module('app')

    .controller('timerController', function ($scope)   {
        $scope.timerRunning = false;

        $scope.startTimer = function () {
            $scope.$broadcast('timer-start');
            $scope.timerRunning = true;
        };

        $scope.stopTimer = function () {
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
        };

        $scope.$on('timer-stopped', function (event, data) {
            console.log('Timer Stopped - data = ', data);
        });

        // Dropdown
        var coursearray = [
            {
                id: "1",
                name: "Finance 1"
            },
            {
                id: "2",
                name: "Wirtschaftsprivatrecht"
            }
        ];
        var effortarray = [
            {
                id: "1",
                name: "Lesen"
            },
            {
                id: "2",
                name: "Übungen"
            }
        ];
        $scope.courses = coursearray;
        $scope.efforts = effortarray;
    });
