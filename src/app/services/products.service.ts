import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private endpoint: string = environment.endpoint + '/products';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(this.endpoint);
  }

  addProduct(productsForm: Products) {
    console.log(productsForm)
    return this.httpClient.post(this.endpoint, productsForm);
  }

  updateCity(id: string | number, updatedProduct: Products) {
    return this.httpClient.put(`${this.endpoint}/${id}`, updatedProduct);
  }

  deleteProduct(id) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
