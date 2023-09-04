import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "./product/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angualar-demo';

  products: Product[] = [];

  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.getAll()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

}
