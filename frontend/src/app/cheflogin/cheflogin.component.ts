import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cheflogin',
  templateUrl: './cheflogin.component.html',
  styleUrls: ['./cheflogin.component.css']
})
export class ChefloginComponent implements OnInit {
  public loginForm!: FormGroup
  apiUrl:string ="http://localhost:3000/chefs"

  constructor(public loginservice: ServiceService, private fb: FormBuilder, private router: Router,private http:HttpClient)
  { }
  validPattern = "/^[a-z0-9]+$/i";
  submitted = false;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]{6,}$'), Validators.minLength(6)]],
      password: ['', [
        Validators.required, Validators.minLength(6)
      ]]
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm!.controls;
  }
  Onsubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // this.router.navigateByUrl('/update');
    }
  }
  login() {
    this.http.get(this.apiUrl).subscribe((res:any)=>{
      console.log(res);
      const user = res.chefs.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['chefdashboard'])
      }
      else{
        alert("User not found")
      }
    },err=>{
      alert("something went wrong")
    }
      )
   }
}

