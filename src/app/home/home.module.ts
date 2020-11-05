import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './../components/sidebar/sidebar.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    AddProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    ProductsComponent,
    DashboardComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
