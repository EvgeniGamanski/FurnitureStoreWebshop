import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { NgToastModule } from 'ng-angular-popup';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './components/new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { MatCardModule } from '@angular/material/card';  
import { MatButtonModule } from '@angular/material/button';  
import { MatGridListModule } from '@angular/material/grid-list';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NewProductDetailComponent } from './components/new-product-detail/new-product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    RegisterComponent,
    NewComponent,
    LoginComponent,
    ProductDetailComponent,
    NewProductDetailComponent,
    HomeComponent,
    AddProductComponent,
    CheckoutComponent,
    UpdateProductComponent,
    ViewProductComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
