import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-veggies',
  templateUrl: './veggies.component.html',
  styleUrls: ['./veggies.component.css']
})
export class VeggiesComponent implements OnInit {
  veggies_data :any =[];
  apiUrl:string = "http://localhost:3000/fooditems"

  constructor(
    private router:Router, 
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
    this.getVeggies();
  }

  getVeggies(){
    this.http.get(this.apiUrl).subscribe((res:any)=>
    {
      let data:any=res.fooditems;
      for (let i of data){
        if(i.type=="veg"){
          this.veggies_data.push(i);
        }
      }
      console.log(this.veggies_data)
    }
    )
  }

}
