import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {JobsComponent} from './jobs/jobs.component';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardHomeComponent},
      { path: 'jobs', component: JobsComponent}
    ]},
  { path: '**', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
