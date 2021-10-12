var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: " + this.location.x + " y: " + this.location.y + "konumundan x:" + point.x + " y:" + point.y + "  konumuna gidiyor");
    };
    ;
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 3, y: 4 });
taxi_1.travelTo({ x: 1, y: 2 });
