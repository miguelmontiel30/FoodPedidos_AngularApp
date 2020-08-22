import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from './../../services/auth.service';
import { ConstantPool } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService] 
})
export class RegisterComponent implements OnInit {
  mostrar:boolean = true;

  registerForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    number_phone: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl('')
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const { email, password } = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);
      this.router.navigate(['/verification-email']);
    }catch(error){
      console.log(error);
    }
  }

}
