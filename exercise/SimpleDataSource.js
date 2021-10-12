"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, "Samsung S10", "Telefon", 4500), new product_1.Product(2, "Samsung S21", "Telefon", 6000), new product_1.Product(3, "Samsung S20", "Telefon", 7000), new product_1.Product(4, "Samsung S22", "Telefon", 8000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
var p = new SimpleDataSource();
