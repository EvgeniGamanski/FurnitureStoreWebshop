import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserService } from '../user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private router: Router, private service:AuthService, private user:UserService, private toast: NgToastService ){
    
  }

  result:any;
  loginform= this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required, Validators.minLength(6)])),
    password:this.builder.control('',Validators.compose([Validators.required, Validators.minLength(6)])),
  });

  proceedLogin(){
      if(this.loginform.valid){ 
          this.service.GetUserByCode(this.loginform.value.id).subscribe(item=>{
            this.result=item;
            if(this.result.password===this.loginform.value.password){
                this.router.navigate(['products']); 
                let itemName='loginData';
                localStorage.setItem(itemName, JSON.stringify(this.loginform.value));
                this.toast.success({detail:'Success',summary:'Login successful!', duration:4000})
            }else{
              this.toast.warning({detail:'Error',summary:'Invalid password!', duration:4000})
            }
          },err => {
            this.toast.warning({detail:'Error',summary:'User not found!', duration:4000})
          })
      }else{
        this.toast.warning({detail:'Error',summary:'Invalid data!', duration:4000})
      }
  }
}

