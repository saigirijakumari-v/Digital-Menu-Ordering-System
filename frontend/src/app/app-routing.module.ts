import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
import { ChefdashboardComponent } from './chefdashboard/chefdashboard.component';
import { ChefloginComponent } from './cheflogin/cheflogin.component';
import { ChefstatusComponent } from './chefstatus/chefstatus.component';
import { FoodMenuManagementComponent } from './food-menu-management/food-menu-management.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NonveggiesComponent } from './nonveggies/nonveggies.component';
import { OrdersComponent } from './orders/orders.component';
import { TiffinsComponent } from './tiffins/tiffins.component';
import { VeggiesComponent } from './veggies/veggies.component';

const routes: Routes = [
  {
    path:"",
    component:MenuComponent
  },
  {
    path:"forgotpwd",
    component:ForgotpwdComponent
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"adminview",
    component:AdminviewComponent,
    children:[
      {
        path:"foodmenu",
        component:FoodmenuComponent
      },
      {
        path:"home",
        component:MenuComponent
      },
      {
        path:"orders",
        component:OrdersComponent
      },
      {
        path:"chefstatus",
        component:ChefstatusComponent
      }
    ]
  },
  {
    path:"foodmodule",
    component:FoodMenuManagementComponent,
    children:[
      {
        path:"tiffins",
        component:TiffinsComponent
      },
      {
        path:"veggies",
        component:VeggiesComponent
      },
      {
        path:"nonveggies",
        component:NonveggiesComponent
      },
      {
        path:"fooditems",
        component:FooditemsComponent

      }
    ]
  },
  {
    path:"customer",
    loadChildren: ()=>
    import('./customer/customer.module').then(
      (m)=>m.CustomerModule
    ),
  },
  {
    path:"chef",
    component:ChefloginComponent,
  },
  {
    path:"chefdashboard",
    component:ChefdashboardComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
