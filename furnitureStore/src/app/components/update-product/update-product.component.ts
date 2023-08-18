import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { productdata } from '../productmodel';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
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
export class UpdateProductComponent implements OnInit {
  dataid:any;
  public product:productdata={} as productdata;
  constructor(private api:ApiService, private activeroute:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('id');
      console.log("id is",this.dataid)
    })
    this.api.getproductbyid(this.dataid).subscribe((data:any)=>{
      this.product = data;
      console.log(this.product)
    })
  }
  update(){
    this.api.updateproduct(this.product, this.dataid).subscribe((data:any)=>{
      this.router.navigate(['/view-product']);
    })
  }
}
