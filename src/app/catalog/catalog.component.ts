import { Component, OnInit } from '@angular/core';
import { IProduct, products } from './product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });

    //this.filter = this.route.snapshot.params['filter'];
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
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
    this.router.navigate(['/cart']);
  }
}
