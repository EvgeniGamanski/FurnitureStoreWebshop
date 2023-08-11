import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Check(){
    if(sessionStorage.getItem('userData')){
      return true;
    }
    else{
      return false;
    }
  }
}
