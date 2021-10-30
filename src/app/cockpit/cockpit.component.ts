import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName = '';
  serverContent = '' ;
  constructor() { }

  ngOnInit(): void {
  }

  addServers(){
    // this.servers.push({
      // type:'server',
      // name:this.serverName,
      // content:this.serverContent
    // });
  }
  bluePrintServers(){
  //  this.servers.push({
    //  type:'blueprints',
    //  name:this.serverName,
    //  content:this.serverContent
  //  })
  }

}
