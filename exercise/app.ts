import { Product } from './product';
import { ProductService } from './productService'

let _productService = new ProductService();

let result;

result = _productService.getProducts();
let result2= _productService.getById(2);
let p = new Product();

p.id = 2
p.name = 'Iphone 6';
p.price = 4000;
p.category = 'Telefon';
_productService.saveProduct(p);

// _productService.deleteProduct(result2);






console.log(result);
