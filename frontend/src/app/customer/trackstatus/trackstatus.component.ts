import { Component } from '@angular/core';
import { FdserviceService } from '../appService/fdservice.service';

@Component({
  selector: 'app-trackstatus',
  templateUrl: './trackstatus.component.html',
  styleUrls: ['./trackstatus.component.css']
})
export class TrackstatusComponent {

  constructor(private fds:FdserviceService){}

  // viewitems(){
  //  this.fds.getItems();
  // }

}

