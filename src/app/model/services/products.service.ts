import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'Adidas Campus', price: 699.0, description: 'Preto', image: './campus.png'},
    { id: 2, name: 'Vans Knu Skool', price: 499.0, description: 'Preto', image: './vans.png' },
    { id: 3, name: 'Vert', price: 799.0, description: 'Branco com detalhe verde', image: './download.png' }
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}
