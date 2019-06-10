import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public jobs: [] = [];
  public job = [];

  constructor(public jobsService: JobService, private route: Router) { }

  ngOnInit() {
    this.jobsService.getAllJobs().subscribe( (data: any) => {
      this.jobs = data.reverse();
    });
  }

  public getJobById(id: any) {
    // metodo de prueba para buscar un trabajo "job" por id
    this.jobsService.getJobById(id).subscribe( (data: any) => {
      this.job = data.filter( (job) => {
        return job.id === id;
      });
      this.route.navigate(['/dashboard/job', id]);
    });
  }

}
