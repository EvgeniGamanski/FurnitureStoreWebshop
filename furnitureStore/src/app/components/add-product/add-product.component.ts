import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { productdata } from '../productmodel';
import { NgToastService } from 'ng-angular-popup';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
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
export class AddProductComponent implements OnInit {
 
  constructor(private api:ApiService, private router:Router, private toast: NgToastService){}

  ngOnInit(): void {
    
  }
  adddata(data:productdata){
    this.api.addproduct(data).subscribe((result)=>{
      this.router.navigate(['/view-product']);
      this.toast.success({detail:'Request successful!',summary:'We will review the request and contact you within 2-3 working days by the provided email!', duration:6000})
    })
  }
}