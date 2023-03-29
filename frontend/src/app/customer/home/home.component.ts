import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { CartComponent } from '../cart/cart.component';
import { FdserviceService } from '../appService/fdservice.service';
import { SharedserviceService } from '../appService/sharedservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Foods[]=[];
  addedid:any;
  constructor(private fs:FoodService, private router: ActivatedRoute,
  private rout:Router,private fds:FdserviceService,private sharedservice:SharedserviceService) {}
  message="from child";

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['searchItem'])
      this.foods = this.fs.getAll().filter((food: { name: string; }) => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
      else
      this.fs.getAll().subscribe((res: Foods[])=>this.foods=res);
    })
    
    this.sharedservice.setMessage(this.orderedmenu);
    }

    cart(){
      this.rout.navigate(["cart"]);
    }

    orderedmenu:any=[];
    add(menuitem:any){

      this.orderedmenu.push(menuitem);
      alert("Item Added");
      console.log("added",this.orderedmenu);
      this.addedid=this.orderedmenu;
      console.log("added",this.addedid);
      //this.rout.navigate(['cart']);
      //this.fds.addItembyId(id).subscribe(res=>console.log(res));
  }

  /*delete(id:any,i:any){
    alert("deleted");
    this.fds.deleteItembyId(id).subscribe(res=>console.log(res));
    this.foods.splice(i,1);
  }*/

  getitems(){
    this.fds.addnewitems().subscribe(res=>console.log(res));
  }

}
