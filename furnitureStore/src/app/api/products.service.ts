import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get("http://localhost:3000/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductNew(){
    return this.http.get("http://localhost:3000/new")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
