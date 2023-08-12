import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private router: Router, private service:AuthService, private user:UserService){
    
  }

  result:any;
  loginform= this.builder.group({
    id:this.builder.control('', Validators.required), 
    password:this.builder.control('',Validators.required)
  });

  proceedLogin(){
    if(this.loginform.valid){
      this.service.GetUserByCode(this.loginform.value.id).subscribe(item=>{
        this.result=item;
        if(this.result.password===this.loginform.value.password){
          if(this.result.isActive){
            sessionStorage.setItem('id',this.result.id);
            this.router.navigate(['products']);
          }else{
            this.router.navigate(['products']); 
            let itemName='userData'
            sessionStorage.setItem(itemName, JSON.stringify(this.loginform.value));
          }
        }else{
          alert("Not valid credentials!")
        }
      });
    }else{
      alert("Invalid data!")
    }
  }
}

