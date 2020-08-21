import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from './../services/auth.service';

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

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onRegister(){
    const { email, password } = this.registerForm.value;
    this.authSvc.register(email, password); 
  }

}
