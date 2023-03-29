import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CreateupdateComponent } from './createupdate/createupdate.component';
import { HeaderComponent } from './header/header.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
    children:[
      {
        path:'customerhome', component:HomeComponent
      },
      {
        path:'home', component:HomeComponent
      },
      {
        path:'search/:searchItem', component:HomeComponent
      },
      {
        path:'tag/:tag', component:HomeComponent
      },
      {
        path:'cart', component:CartComponent
      },
      {
        path:'createupdate',component:CreateupdateComponent
      }
    ]

  }
  
  
]

@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    CreateupdateComponent,
    HeaderComponent,
    SearchComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
