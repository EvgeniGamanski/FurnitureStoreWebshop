import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './components/new/new.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NewProductDetailComponent } from './components/new-product-detail/new-product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'update-product/:id',component:UpdateProductComponent},
  {path:'view-product',component:ViewProductComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},  
  {path:'new-collection',component:NewComponent},
  {path:'details/:productId',component:ProductDetailComponent},
  {path:'newdetails/:productId',component:NewProductDetailComponent},
  {path:'checkout',component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }