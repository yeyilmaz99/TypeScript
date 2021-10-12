var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: " + point.x + " konumundan y: " + point.y + " konumuna gidiyor");
    };
    ;
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
var taxi_2 = new Taxi({ x: 1, y: 2 }, 'red');
var taxi_3 = new Taxi();
