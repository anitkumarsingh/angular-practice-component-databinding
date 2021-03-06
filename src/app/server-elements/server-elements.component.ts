import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementsComponent implements OnInit {
  @Input('aliasElement') element :{type:string,name:string,content:string}

  constructor() { }

  ngOnInit(): void {
  }

}
