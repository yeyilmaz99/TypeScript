import { Product } from "./product";

export class SimpleDataSource {
    private products: Array <Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product (1,"Samsung S10","Telefon",4500),
            new Product (2,"Samsung S21","Telefon",6000),
            new Product (3,"Samsung S20","Telefon",7000),
            new Product (4,"Samsung S22","Telefon",8000),
        )
    }
    getProducts(): Product []{
        return this.products
    }
}

let p = new SimpleDataSource();
