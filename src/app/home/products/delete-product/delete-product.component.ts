import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  @Input() element: Products = {
    id: 12345,
    identification: '',
    name: '',
    category: '',
    price: '',
    inventory: ''
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
  
  deleteUser() {
    this.productsService.deleteProduct(this.element.id).subscribe(res => {
      alert('Usuario eliminado');
      location.reload();
    }, err => console.error(err)
    )
  }

}
