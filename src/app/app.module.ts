import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// SERVICES
import { GetFoodItemsService } from './get-food-items.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './login/login-card/login-card.component';
import { FoodListComponent } from './favorites/food-list/food-list.component';
import { NavigationMenuComponent } from './main-components/navigation-menu/navigation-menu.component';
import { FavoritesComponent } from './favorites/favorites-card/favorites.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home-card/home.component';
import { CartComponent } from './cart/cart-card/cart.component';
import { PasswordComponent } from './login/password/password.component';
import { RegisterComponent } from './register/register-card/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire' ;
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './send-email/send-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';


const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginCardComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, 
    LoginCardComponent, 
    FoodListComponent, 
    NavigationMenuComponent,
    FavoritesComponent, 
    NotificationsComponent, 
    HomeComponent, 
    CartComponent,
    RegisterComponent, 
    PasswordComponent, 
    SendEmailComponent, 
    ForgotPasswordComponent, 
  ],
  imports: [
    BrowserModule, AppRoutingModule, RouterModule.forRoot(routes), ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    GetFoodItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }