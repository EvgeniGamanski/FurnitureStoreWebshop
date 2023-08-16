import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Check(){
    if(localStorage.getItem('loginData')){
      return true;
    }
    else{
      return false;
    }
  }
}
