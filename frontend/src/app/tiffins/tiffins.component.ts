import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tiffins',
  templateUrl: './tiffins.component.html',
  styleUrls: ['./tiffins.component.css']
})
export class TiffinsComponent implements OnInit {
  tiffins_data :any =[];
  apiUrl:string = "http://localhost:3000/fooditems"
  constructor(
    private router:Router, 
    private http:HttpClient
    ) { 
}

  ngOnInit(): void {
    //Method call for fetch tiffins data
    this.getTiffins();

  }

  getTiffins(){
    this.http.get(this.apiUrl).subscribe((res:any)=>
    {
      console.log("post res : ",res);
      // this.tiffins_data=res.tiffins;
      let data:any=res.fooditems;
      for (let i of data){
        if(i.type=="tiffin"){
          this.tiffins_data.push(i);
        }
      }
      console.log(this.tiffins_data)
    }
    )
  }

}
