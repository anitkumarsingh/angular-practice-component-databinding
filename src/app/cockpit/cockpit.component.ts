import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output('bpServer') bluePrintserverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  
  // serverName = '';
  // serverContent = '' ;

  constructor() { }

  ngOnInit(): void {
  }

  addServers(localServerName:HTMLInputElement,localServerContent:HTMLInputElement){
  this.serverCreated.emit({
    serverName:localServerName.value, // this.serverName
    serverContent:localServerContent.value // this.serverContent
  });
  }
  bluePrintServers(localServerName:HTMLInputElement,localServerContent:HTMLInputElement){
    this.bluePrintserverCreated.emit({
      serverName:localServerName.value,
      serverContent:localServerContent.value
    });
  }

}
