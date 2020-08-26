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
  serverCreationStatus = "No server was created."
  serverName = "Test Server";

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): void {}

  onCreateServer(){
    this.serverCreationStatus = "Server was created."
  }

  onUpdateServerName(event :Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
