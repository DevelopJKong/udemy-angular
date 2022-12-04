import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = "No server was created";
  serverName: string = 'serverName';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
