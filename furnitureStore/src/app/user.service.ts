import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Check(){
    if(sessionStorage.getItem('loginData')){
      return true;
    }
    else{
      return false;
    }
  }
}
