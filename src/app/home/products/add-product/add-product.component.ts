import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productsForm: FormGroup;
  newProduct: any = {};

  constructor(public formbuilder: FormBuilder, private productsService: ProductsService) {
    //validate form
    this.productsForm = this.formbuilder.group({
      identification: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(3)]],
      inventory: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  saveProduct() {
    this.newProduct = this.productsService.addProduct(this.productsForm.value).subscribe(() => {
      alert('Product aggregate');
      location.reload();
    }, err => console.error(err)
    );
  }

}
