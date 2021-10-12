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
