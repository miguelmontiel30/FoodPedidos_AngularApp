import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// SERVICES
import { GetFoodItemsService } from './get-food-items.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { FoodListComponent } from './food-list/food-list.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire' ;
import { environment } from 'src/environments/environment';
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