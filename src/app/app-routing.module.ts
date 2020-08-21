import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home-card/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'login-card', 
    loadChildren: () => import('./login/login-card/login-card.module').then(m => m.LoginCardModule) 
  }, 
  { 
    path: 'password', 
<<<<<<< Updated upstream
    loadChildren: () => import('./password/password.module').then(m => m.PasswordModule) 
  }, 
  { 
<<<<<<< Updated upstream
    path: 'register', 
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) 
=======
    path: 'main', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule) 
=======
    loadChildren: () => import('./login/password/password.module').then(m => m.PasswordModule) 
  }, 
  { 
    path: 'register', 
    loadChildren: () => import('./register/register-card/register.module').then(m => m.RegisterModule) 
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
