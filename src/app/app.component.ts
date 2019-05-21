import {Component, OnInit} from '@angular/core';
declare function  init_plugins();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nano-workers';

  ngOnInit(): void {
    init_plugins();
  }
}

