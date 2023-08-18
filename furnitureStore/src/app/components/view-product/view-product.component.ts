import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productdata } from '../productmodel';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
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
export class ViewProductComponent implements OnInit {
  product: undefined | productdata[];
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct(){
    this.api.getproduct().subscribe(res=>{
    this.product = res;
    console.log(res); 
    })
  }
  
  deleteproduct(id:number){
    this.api.deleteproduct(id).subscribe((res)=>{
    })
    this.getproduct();
  }
}
