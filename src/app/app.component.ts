import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverName = '';
 serverContent = '' ;
 servers = [];

 addServers(){
   this.servers.push({
     type:'server',
     name:this.serverName,
     content:this.serverContent
   });
 }
 bluePrintServers(){
  this.servers.push({
    type:'blueprints',
    name:this.serverName,
    content:this.serverContent
  })
 }
}
