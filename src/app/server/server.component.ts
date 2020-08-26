import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId;
    serverStatus: string;

    constructor(){
        this.serverId = Math.random().toFixed(1);
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus == "online" ? 'green' : 'red';
    }

}