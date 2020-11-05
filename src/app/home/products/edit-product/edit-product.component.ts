import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  @Input() element: Products = {
    id: 0,
    identification: '',
    name: '',
    category: '',
    price: '',
    inventory: ''
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.element.id)
   }

  editProduct() {
    this.productsService.updateCity(this.element.id, this.element).subscribe(res => {
      alert('Product Updated');
      location.reload();
    }, err => console.error(err)
    )
  }

}
