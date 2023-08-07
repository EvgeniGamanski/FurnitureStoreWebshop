import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { UserService } from '../../user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem=0;
  constructor(private cart: CartService, public user: UserService,private toast: NgToastService){
  }
  logout(){
    this.user.isLogged=false;
  }
  ngOnInit(): void {
    this.cart.GetProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}

