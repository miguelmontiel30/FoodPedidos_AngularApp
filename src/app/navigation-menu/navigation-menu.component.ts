import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
 
@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],
  providers: [AuthService]
}) 
export class NavigationMenuComponent implements OnInit {
public isLogged = false;

  constructor(private authSvc: AuthService) { }

  async ngOnInit() {
    try{
      console.log('Navbar');
      const user = await this.authSvc.getCurrentUser();
      if(user){
        this.isLogged = true;
        console.log('User->', user);
      }
    }catch(error){
      console.log(error);
    }
  }

}
