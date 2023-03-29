import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders_data:any=[];
  apiUrl:string = "http://localhost:3000/orders";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.http.get(this.apiUrl).subscribe((res:any)=>
    {
      this.orders_data=res.orders;
      console.log(this.orders_data)
    }
    )
  }

}
