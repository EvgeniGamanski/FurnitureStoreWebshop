import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private router: Router, private service: AuthService, private toast: NgToastService ){}
  registerform=this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required, Validators.minLength(6)])),
    name: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(3)])),
    password:this.builder.control('',Validators.compose([Validators.required, Validators.minLength(6)])),
    email:this.builder.control('',Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),

  });
  proceedRegister(){
    if(this.registerform.valid){
      this.service.RegisterUser(this.registerform.value).subscribe(result=>{
        this.toast.success({detail:'Success',summary:'Registered successfully!', duration:3000})
        this.router.navigate(['login'])
      });
    }else{
      this.toast.warning({detail:'Error',summary:'Please enter valid data!', duration:3000})
    }
  }
}