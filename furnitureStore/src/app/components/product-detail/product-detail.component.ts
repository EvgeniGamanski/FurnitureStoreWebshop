import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/api/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productData: undefined | any;
  constructor(private activeRoute:ActivatedRoute, private product:ProductsService ){}

  ngOnInit(): void {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProductById(productId).subscribe((result)=>{
      this.productData=result;
    })
  }
}
