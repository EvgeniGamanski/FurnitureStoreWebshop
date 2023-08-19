import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { ProductsService } from 'src/app/api/products.service';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../../user.service';
import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter',[
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({opacity: 1})),
])
const fadeIn = trigger('fadeIn', [enterTransition])

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
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
export class NewComponent implements OnInit {
  public productslist:any;
  constructor(private api:ProductsService, private cart: CartService, private toast: NgToastService, public user: UserService){}

  ngOnInit(): void {
    this.api.getProductNew().subscribe(res=>{
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
