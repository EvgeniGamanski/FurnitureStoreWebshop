import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products!:any[];
  public grandTotal:number = 0;
  constructor(private cart: CartService, private toast: NgToastService){}

  ngOnInit(): void {
    this.cart.GetProduct().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
  }

  emptyCart(){
    this.toast.info({detail:'Removed all items from cart',summary:'All items have been removed', duration:3000})
    this.cart.removeAllCart();
  }

  delete(item:any){
    this.toast.info({detail:'Removed from cart',summary:'Item has been removed', duration:2000})
    this.cart.removeCartItem(item)
  }

  checkout(){
    this.toast.success({detail:'Checkout success!',summary:'You will receive a confirmation email!', duration:3000})
    this.cart.removeAllCart();
  }
}
