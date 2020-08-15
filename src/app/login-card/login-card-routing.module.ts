import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCardComponent } from './login-card.component';

const routes: Routes = [{ path: '', component: LoginCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginCardRoutingModule { }
