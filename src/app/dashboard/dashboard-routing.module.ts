import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {JobsComponent} from './jobs/jobs.component';
import {DashboardComponent} from './dashboard.component';
import {WorkInProgressComponent} from './work-in-progress/work-in-progress.component';
import {CompletedWorksComponent} from './completed-works/completed-works.component';
import {JobByIdComponent} from './job-by-id/job-by-id.component';
import {DepositComponent} from './deposit/deposit.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardHomeComponent},
      { path: 'jobs', component: JobsComponent },
      { path: 'job/:id', component: JobByIdComponent },
      { path: 'work-in-progress', component: WorkInProgressComponent },
      { path: 'completed-works', component: CompletedWorksComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'profile', component: ProfileComponent },
    ]},
  { path: '**', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
