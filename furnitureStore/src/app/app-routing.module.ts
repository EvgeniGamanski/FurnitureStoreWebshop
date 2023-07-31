import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'register', component: RegisterComponent},
  {path: '',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},  
  {path:'new-collection',component:NewComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }