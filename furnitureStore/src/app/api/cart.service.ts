import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public productsList = new BehaviorSubject<any>([])
public cartItemList:any=[]
  constructor() { }

  GetProduct(){
    return this.productsList.asObservable();
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.productsList.next(this.cartItemList)
    this.getTotalPrice();
  } 

  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }


  removeAllCart(){
    this.cartItemList=[]
    this.productsList.next(this.cartItemList);
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productsList.next(this.cartItemList);
  }
}
