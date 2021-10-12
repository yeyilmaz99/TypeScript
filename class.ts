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