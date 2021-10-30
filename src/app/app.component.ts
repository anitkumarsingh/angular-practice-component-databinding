import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 servers = [{type:'server',name:'A test server',content:'A test server content'}];

 onServerAdded(serverData:{serverName:string,serverContent:string}){
  this.servers.push({
    type:'server',
    name:serverData.serverName,
    content:serverData.serverContent
  });
}
onBluePrintServerAdded(bluePrintServerData:{serverName:string,serverContent:string}){
 this.servers.push({
   type:'blueprints',
   name:bluePrintServerData.serverName,
   content:bluePrintServerData.serverContent
    })
 }

}
