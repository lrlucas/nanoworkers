import { Component, OnInit } from '@angular/core';
declare function  init_plugins();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
