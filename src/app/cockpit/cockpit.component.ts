import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output('bpServer') bluePrintserverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  
  serverName = '';
  serverContent = '' ;

  constructor() { }

  ngOnInit(): void {
  }

  addServers(){
  this.serverCreated.emit({
    serverName:this.serverName,
    serverContent:this.serverContent
  });
  }
  bluePrintServers(){
    this.bluePrintserverCreated.emit({
      serverName:this.serverName,
      serverContent:this.serverContent
    });
  }

}
