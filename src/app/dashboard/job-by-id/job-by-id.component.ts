import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-by-id',
  templateUrl: './job-by-id.component.html',
  styleUrls: ['./job-by-id.component.css']
})
export class JobByIdComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (data: any) => {
      console.log(data)
    });
  }

}
