import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public sidebarRoutes = [
    { id: 1, title: 'Home', route: '/dashboard/home' },
    { id: 2, title: 'Available Jobs', route: '/dashboard/jobs' },
    // { id: 2, title: 'Completed work', route: '/dashboard/completed-works' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
