import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/api/products.service';
import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter',[
  style({
    opacity: 0
  }),
  animate('0.5s ease-in', style({opacity: 1})),
])
const fadeIn = trigger('fadeIn', [enterTransition])

@Component({
  selector: 'app-new-product-detail',
  templateUrl: './new-product-detail.component.html',
  styleUrls: ['./new-product-detail.component.css'],
  animations:[fadeIn]
})
export class NewProductDetailComponent implements OnInit {
  productData: undefined | any;
  constructor(private activeRoute:ActivatedRoute, private product:ProductsService ){}

  ngOnInit(): void {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getNewProductById(productId).subscribe((result)=>{
      this.productData=result;
    })
  }
}