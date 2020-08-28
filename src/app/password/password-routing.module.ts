import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordComponent } from './password.component';

const routes: Routes = [{ path: '', component: PasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
