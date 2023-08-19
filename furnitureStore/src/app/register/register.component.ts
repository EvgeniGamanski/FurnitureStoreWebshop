import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private router: Router, private service: AuthService ){}
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
        alert("Registered successfully!")
        this.router.navigate(['login'])
      });
    }else{
      alert("Please enter valid data!")
    }
  }
}