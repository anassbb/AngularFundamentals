import { Component, OnInit } from '@angular/core';
import { IProduct, products } from './product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  //styles: ['a {font-weight: bold}'],
})
export class CatalogComponent implements OnInit {
  products: any;
  filter: string = '';

  constructor(
    private cartSrv: CartService,
    private productSvc: ProductService
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  getFiltredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category === this.filter
        );
  }

  addToCart(product: IProduct) {
    this.cartSrv.add(product);
  }
}
