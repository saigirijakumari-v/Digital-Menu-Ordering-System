import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefstatus',
  templateUrl: './chefstatus.component.html',
  styleUrls: ['./chefstatus.component.css']
})
export class ChefstatusComponent implements OnInit {
  chefs_data:any=[]

  apiUrl:string = "http://localhost:3000/orders";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(){
    this.http.get(this.apiUrl).subscribe((res:any)=>
    {
      this.chefs_data=res.orders;
      console.log(this.chefs_data)
    }
    )
  }

}
