import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FdserviceService } from '../appService/fdservice.service';
import { SharedserviceService } from '../appService/sharedservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
foods:any=[];
likes=0;

constructor(private router:Router, private fds:FdserviceService,private sharedservice:SharedserviceService){}

message:any=[];
addedid:any;

ngOnInit():void{
  // this.fds.getItems().subscribe(res=>{
  //   console.log(res);
  //   this.foods=res;
  // })

  this.message=this.sharedservice.getMessage();
  console.log(this.message);
  this.addedid=this.sharedservice.getid();
  console.log(this.addedid);

}

placeorder(){
  try{
    if(this.message!=null){
  alert("Thank you! Your order is confirmed...");
  this.fds.adddb(this.message).subscribe(res=>console.log(res));
  //this.fds.adddb(id);
  console.log(this.message);
  console.log("sent to db");
    }
    else{
      alert("Cart is empty!");
    }
  }
  catch(err){
    console.log("error");
  }
}
delete(id:any,i:any){
  
  try{
  console.log(this.message,"deleted",id);
  //this.fds.deleteItembyId(id).subscribe(res=>console.log(res));
  this.message.splice(i,1);
  console.log(this.message,"deleted",id);
  }
  catch(err){
    console.log("error");
  }

}

like(){
  alert("Thank you for your Interest!..");
  this.likes=this.likes+1;
}

comment(){
this.router.navigate(["createupdate"]);
}
}
