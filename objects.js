var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: " + point.x + " konumundan y: " + point.y + " konumuna gidiyor");
    };
    ;
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("bus x: " + point.x + " konumundan y: " + point.y + " konumuna gidiyor");
    };
    ;
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.currentLocation = { x: 2, y: 5 };
taxi_1.travelTo({ x: 1, y: 2 });
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 78 });
taxi_2.currentLocation = { x: 6, y: 321 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
