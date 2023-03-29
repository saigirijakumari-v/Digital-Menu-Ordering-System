import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nonveggies',
  templateUrl: './nonveggies.component.html',
  styleUrls: ['./nonveggies.component.css']
})
export class NonveggiesComponent implements OnInit {
  nonveggies_data :any =[];
  apiUrl:string = "http://localhost:3000/fooditems"
  constructor(
    private router:Router, 
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
    this.getNonveggies();
  }
  getNonveggies(){
    this.http.get(this.apiUrl).subscribe((res:any)=>
    {
      let data:any=res.fooditems;
      for (let i of data){
        if(i.type=="nonveg"){
          this.nonveggies_data.push(i);
        }
      }
      console.log(this.nonveggies_data)
    })
  }
}
