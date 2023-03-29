import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { MenuComponent } from './menu/menu.component';
import { FoodMenuManagementComponent } from './food-menu-management/food-menu-management.component';
import { TiffinsComponent } from './tiffins/tiffins.component';
import { NonveggiesComponent } from './nonveggies/nonveggies.component';
import { VeggiesComponent } from './veggies/veggies.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { OrdersComponent } from './orders/orders.component';
import { ChefstatusComponent } from './chefstatus/chefstatus.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { ChefloginComponent } from './cheflogin/cheflogin.component';
import { ChefdashboardComponent } from './chefdashboard/chefdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpwdComponent,
    MenuComponent,
    FoodMenuManagementComponent,
    TiffinsComponent,
    NonveggiesComponent,
    VeggiesComponent,
    AdminviewComponent,
    OrdersComponent,
    ChefstatusComponent,
    FoodmenuComponent,
    FooditemsComponent,
    ChefloginComponent,
    ChefdashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
