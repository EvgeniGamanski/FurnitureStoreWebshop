import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { ProductsService } from 'src/app/api/products.service';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../../user.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(":leave", [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' })),
      ])
    ])
  ],
})
export class ProductsComponent implements OnInit {
  public productslist:any;
  constructor(private api:ProductsService, private cart: CartService, private toast: NgToastService, public user: UserService){}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productslist = res;

      this.productslist.forEach((a:any) => {
        Object.assign(a,{ quantity:1,total:a.price })
      });
    }); 
  }

  addToCart(item:any){ 
    this.toast.success({detail:'Added to cart',summary:'Item has been added', duration:3000})
    this.cart.addToCart(item);
  }
}
