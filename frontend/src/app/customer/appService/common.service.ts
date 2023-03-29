import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Post } from '../shared/models/post.model';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
 // Main api url to call api
 uri = 'http://localhost:4000/employees';

private postupdated=new Subject<Post[]>();
  constructor(private http:HttpClient) { }

// To Get The List Of Employee
getitem() {
  return this.http.get(`${this.uri}`);
  }
 
  // To Get Employee Details For Single Record Using Id
  getitemById(id: any) {
  return this.http.get(`${this.uri}/edititem/${id}`);
  }
 
  // To Updated Specific Employee
  updateitem(id: any, body: any) {
  return this.http.post(`${this.uri}/updateitem/${id}`, body);
  }
 
  // To Create/Add New Employee
  additem(body: any) {
  return this.http.post(`${this.uri}/additem`, body);
  }
 
  // To Delete Any Employee
  deleteitem(id: any) {
  return this.http.get(`${this.uri}/deleteitem/${id}`);
  }
 
 }



