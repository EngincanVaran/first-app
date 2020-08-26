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
  serverCreated = false;
  serverList = ["TestServer", "TestServer-2"]

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): void {}

  onCreateServer(){
    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
    this.serverList.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event :Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
