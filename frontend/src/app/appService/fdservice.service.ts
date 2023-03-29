import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class FdserviceService {

  //addurl="http://localhost:8000/additems";
deleteurl="http://localhost:3000/deleteitem";
geturl="http://localhost:3000/getitems";
addbyidurl="http://localhost:3000/addbyid";
addtodb="http://localhost:3000/addtodb";

newgeturl="http://localhost:3000/getfooditems";

baseurl="http://localhost:8080";
httpheaders=new HttpHeaders().set('Content-Type','application/json');
 /* item={
id:Number,
name:String,
origins:String,
cookTime:String,
price:String

  };*/

  constructor(private http: HttpClient) { }

createitem(item:Item){
  return this.http.post(this.baseurl+'/create',item);
}
readitem(){
  return this.http.get(this.baseurl+'/read');
}

deleteitem(id:string){
  return this.http.delete(this.baseurl+'/delete/'+id);
}


  //addItems(){
   // return this.http.post(this.addurl,this.item).pipe(map(res=>res));
  //}
addItembyId(id:any){
   // return this.http.post(this.addbyidurl,{headers:this.httpheaders}).pipe(map(res=>res));
    console.log(id);
   return this.http.post(this.addbyidurl,id).pipe(map(res=>res));
  }

  deleteItembyId(id:any) {
    console.log(id);
   return this.http.delete(this.deleteurl,id).pipe(map(res=>res));
  }
  getItems(){
    return this.http.get(this.geturl).pipe(map(res=>res));
  }
  adddb(ordereditems:any){
    console.log("ordereditems",ordereditems);
    return this.http.post(this.addtodb,ordereditems).pipe(map(res=>res));;
  }

  addnewitems(){
    return this.http.get(this.newgeturl).pipe(map(res=>res));
  }
}
