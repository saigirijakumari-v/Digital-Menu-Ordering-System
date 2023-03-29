import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  

  constructor(private http: HttpClient) { }
 login(passdata:any):Observable<any>{
  
  return this.http.post("http://localhost:8000/login",passdata,httpOptions);
 }

}
