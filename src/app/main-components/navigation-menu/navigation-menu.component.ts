import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],
  providers: [AuthService]
}) 
export class NavigationMenuComponent {
 
  public user$: Observable<any> = this.authSvc.afAuth.user; 

  constructor(private authSvc: AuthService, private router: Router) { }

  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }catch(error){
      console.log(error);
    }
  }

}
