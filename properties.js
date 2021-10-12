var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: " + this._location.x + " y: " + this._location.y + "konumundan x:" + point.x + " y:" + point.y + "  konumuna gidiyor");
    };
    ;
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('koordinat bilgiler negatif olamaz');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 3, y: 4 });
taxi_1.travelTo({ x: 1, y: 2 });
var currentLocation = taxi_1.location;
taxi_1.location = { x: 65, y: 123 };
taxi_1.travelTo({ x: 1, y: 2 });
