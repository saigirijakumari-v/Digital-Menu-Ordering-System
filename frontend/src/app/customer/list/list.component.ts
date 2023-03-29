import { Component } from '@angular/core';
import { CommonService } from '../appService/common.service';
import { FdserviceService } from '../appService/fdservice.service';
import { Item } from '../item';

export interface Itemd{
Name: string;
Price: string;
 
 }



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  fooditem="dosa";
  entereditem="";
  
 items: Item[] = [];
  errorMessage: any;
  id: any;
constructor(private commonservice:CommonService){}


Repdata: any;
valbutton="save";

ngOnInit(){
  //this.commonservice.getitem().subscribe(data=>this.Repdata=data);
  
 employeeList: 
 displayedColumns:[] = ['Name', 'Price'];
  
}



// delete(id:any){
//   this.commonservice.deleteitem(id).subscribe(data => {
//     alert(data);
//     this.ngOnInit();},
//     error=>this.errorMessage=error)
//   }
//   } 
placeorder(){

  this.fooditem=this.entereditem;
  //alert("order placed..");
  
}
  
}





