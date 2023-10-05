import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidebarVisible: boolean = false;
  sidebarVisible2: boolean = false;
  items: MegaMenuItem[] =[];

  ngOnInit() {

  }
  title = 'phoneStore2';
}
