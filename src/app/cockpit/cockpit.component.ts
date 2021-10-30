import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output('bpServer') bluePrintserverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @ViewChild('localServerContent') serverContent:ElementRef 
  // serverName = '';
  // serverContent = '' ;

  constructor() { }

  ngOnInit(): void {
  }

  addServers(localServerName:HTMLInputElement){
  this.serverCreated.emit({
    serverName:localServerName.value, // this.serverName
    serverContent:this.serverContent.nativeElement.value // this.serverContent
  });
  }
  bluePrintServers(localServerName:HTMLInputElement){
    this.bluePrintserverCreated.emit({
      serverName:localServerName.value,
      serverContent:this.serverContent.nativeElement.value 
    });
  }

}
