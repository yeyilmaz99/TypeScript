interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} konumundan y: ${point.y} konumuna gidiyor`)
    };

}

class Bus implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`bus x: ${point.x} konumundan y: ${point.y} konumuna gidiyor`)
    };
}

let taxi_1: Taxi = new Taxi();
taxi_1.currentLocation = { x:2, y:5 };
taxi_1.travelTo({x:1,y:2})

let taxi_2 = new Taxi();

taxi_2.travelTo({x:5,y:78});
taxi_2.currentLocation = { x:6, y:321 };


let bus = new Bus();
bus.travelTo({x:1,y:2})



console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);