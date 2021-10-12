interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    
    color: string;
    currentLocation: Point;

    constructor(location?: Point, color?:string){
        this.currentLocation = location;
        this.color = color;

    }

    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} konumundan y: ${point.y} konumuna gidiyor`)
    };

}


let taxi_1: Taxi = new Taxi({x:1,y:2});
taxi_1.travelTo({x:1,y:2})
console.log(taxi_1.currentLocation);

let taxi_2: Taxi = new Taxi({x:1,y:2},'red');
let taxi_3 = new Taxi();
