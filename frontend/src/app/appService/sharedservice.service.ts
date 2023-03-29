import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  message:any;
  sendid:any;
  constructor() { }

  setMessage(data: any){
    this.message=data;
  }
  getMessage(){
    return this.message;
  }
  setid(data: any){
    this.sendid=data;
  }
  getid(){
    return this.sendid;
  }
}
