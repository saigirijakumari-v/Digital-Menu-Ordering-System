import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FdserviceService } from '../appService/fdservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchItem:string='';

  constructor(private route: ActivatedRoute, private router:Router,private fds:FdserviceService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItem'])
      this.searchItem=params['searchItem'];
    })  
  }
  search():void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/' + this.searchItem)

  }
  cart(){
    this.router.navigateByUrl("/customer/cart");
  }  

  status(){
    this.fds.getItems();
    this.router.navigateByUrl("customer/trackstatus");
    //this.fds.getItems();
  }

}
