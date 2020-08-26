import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // value
  // selector: '[app-servers]',  // attribute 
  // selector: '.app-servers',   // class
  templateUrl: "./servers.component.html" ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): void {
  }

}
