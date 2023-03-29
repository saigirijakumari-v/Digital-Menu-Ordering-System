import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
  editid!:string;
  method!:Boolean;
  fooddata:any = [];
  dname!:string;
  dprice!:number;
  dtype!:string;
  apiUrl:string = "http://localhost:3000/fooditems";
  url:string = "http://localhost:3000/addDish";
  delurl:string = "http://localhost:3000/delete/";
  getrecordurl:string = "http://localhost:3000/getdata/";
  updateurl:string = "http://localhost:3000/update/"
  constructor(
    private router:Router,
    private http:HttpClient
  ) { 
    this.dname='';
    this.dprice=0;
    this.dtype='';
  }

  ngOnInit(): void {
    this.getfoodData()

  }
  getfoodData(){
    this.http.get(this.apiUrl).subscribe((res:any)=>{
      console.log("Food Data :",res);
      this.fooddata = res.fooditems;
    })
  }

  addbutton(){
    this.method=true;
  }

  addDishItem(){
    // event.preventDefault();
    debugger;
    //storing data
  const addDish = {
    Dname:this.dname,
    Dprice:this.dprice,
    Dtype:this.dtype
  };

  this.http.post(this.url,addDish).subscribe((res:any)=>{
    this.dname='';
    this.dtype='';
    this.dprice=0;
    alert("Record added successfully ");
  })
  }


  editItem(id:string){
    this.editid=id;
    this.method=false;
    this.http.get(this.getrecordurl+id).subscribe((res:any)=>{
      console.log("Item record : ",res);
      this.dname = res.dishdata[0].dishname;
      this.dtype = res.dishdata[0].type;
      this.dprice = res.dishdata[0].dishprice;
      alert("Record deleted Successfully");
      console.log("Get matched record from fooditems :",res.dishdata[0]);
    })
  }

  updateItem(){
    debugger;
    //storing data
  const updateDish = {
    Dname:this.dname,
    Dprice:this.dprice,
    Dtype:this.dtype
  };

  this.http.put(this.updateurl+this.editid,updateDish).subscribe((res:any)=>{
    this.dname='';
    this.dtype='';
    this.dprice=0;
    console.log("dish name",this.dname);
    alert("Record updated successfully");
    console.log("Record updated successfully : ",res);
  })
    console.log("Update method is working",this.editid);
  }


  deleteItem(id:string){
    this.http.delete(this.delurl+id).subscribe((res:any)=>{
      alert("Record deleted successfully");
    });
  }

}
