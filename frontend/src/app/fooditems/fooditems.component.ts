import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {
  food_items :any =[];
  apiUrl:string = "http://localhost:3000/fooditems"

  constructor(
    private router:Router, 
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getItems();
  }
  getItems(){
    this.http.get(this.apiUrl).subscribe((res:any)=>
    {
      console.log("post res : ",res);
      // this.tiffins_data=res.tiffins;
      this.food_items=res.fooditems;
      console.log(this.food_items)
    }
    )
  }

}
