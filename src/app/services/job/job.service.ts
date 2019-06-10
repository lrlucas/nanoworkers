import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }


  getAllJobs() {
    return this.http.get('../../../assets/jsonExample/jobs.json').pipe( map( (data) => {
      return data;
    }));
  }

  getJobById(id: any) {
    return this.http.get('../../../assets/jsonExample/jobs.json').pipe( map( (data: any) => {
      return data;
    }));
  }
}
