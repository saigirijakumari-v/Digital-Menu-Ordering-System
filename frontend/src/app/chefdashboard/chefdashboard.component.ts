import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chefdashboard',
  templateUrl: './chefdashboard.component.html',
  styleUrls: ['./chefdashboard.component.css']
})
export class ChefdashboardComponent implements OnInit {
  dstatus!:string;
  astatus!:string;
  orders_data :any =[];
  apiUrl:string = "http://localhost:3000/orders";
  dUrl:string = "http://localhost:3000/deliverystatus/";
  aUrl:string = "http://localhost:3000/availabilitystatus/";


  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getOrders();
    
  }
  getOrders(){
    this.http.get(this.apiUrl).subscribe((res:any)=>
    {
      this.orders_data=res.orders;
      console.log(this.orders_data);
    }
    )
  }

  avaiability(id:string){
    const availabilityStatus ={
      Astatus:"Available"
    };
    this.http.put(this.aUrl+id,availabilityStatus).subscribe((res:any)=>{
      console.log("Availability status ");
        alert("Status Updated successfully");
      })
  }


  preparing(id:string){
    const deliveryStatus = {
      Dstatus:"Preparing"
    };
    this.http.put(this.dUrl+id,deliveryStatus).subscribe((res:any)=>{
      this.dstatus='';
      console.log("Update status ",this.dstatus);
        alert("Status Updated successfully");
      })

  }
  delivered(id:string){
    //storing data
    const deliveryStatus = {
      Dstatus:"Delivered"
    };

    this.http.put(this.dUrl+id,deliveryStatus).subscribe((res:any)=>{
    this.dstatus='';
    console.log("Update status ",this.dstatus);
      alert("Status Updated successfully");
    })

  }
  closed(id:string){
    const availabilityStatus ={
      Astatus:"Closed"
    };
    this.http.put(this.aUrl+id,availabilityStatus).subscribe((res:any)=>{
      this.astatus='';
      console.log("Availability status ",this.astatus);
        alert("Status Updated successfully");
      })

  }
}
