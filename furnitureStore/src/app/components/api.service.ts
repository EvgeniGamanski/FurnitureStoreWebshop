import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productdata } from './productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addproduct(data:productdata){
    return this.http.post("http://localhost:3000/product",data)  
  }

  getproduct(){
    return this.http.get<productdata[]>("http://localhost:3000/product/")
  }

  deleteproduct(id:number){
    return this.http.delete("http://localhost:3000/product/"+id)
  }

  updateproduct(product:productdata,id:number){
    return this.http.put<productdata>("http://localhost:3000/product/"+id, product)
  }

  getproductbyid(id:string){
    return this.http.get<productdata>("http://localhost:3000/product/"+id)
  }
}
