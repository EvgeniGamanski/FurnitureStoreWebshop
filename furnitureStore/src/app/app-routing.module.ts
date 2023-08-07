import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './components/new/new.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NewProductDetailComponent } from './components/new-product-detail/new-product-detail.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},  
  {path:'new-collection',component:NewComponent},
  {path:'details/:productId',component:ProductDetailComponent},
  {path:'newdetails/:productId',component:NewProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
