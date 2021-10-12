import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {
    
    constructor(private _location?: Point, private _color?:string){    }

    travelTo(point: Point): void {
        console.log(`taksi x: ${this._location.x} y: ${this._location.y}konumundan x:${point.x} y:${point.y}  konumuna gidiyor`)
    };

    get location(){
        return this._location;
    };

    set location(value: Point){
        if(value.x<0 || value.y<0){
            throw new Error('koordinat bilgiler negatif olamaz');
        }
        this._location = value;
    }

}