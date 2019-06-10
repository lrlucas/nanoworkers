import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { HeaderComponent } from './dashboard-components/header/header.component';
import { SidebarComponent } from './dashboard-components/sidebar/sidebar.component';
import { JobsComponent } from './jobs/jobs.component';
import { DashboardComponent } from './dashboard.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { CompletedWorksComponent } from './completed-works/completed-works.component';
import { HttpClientModule } from '@angular/common/http';
import { JobByIdComponent } from './job-by-id/job-by-id.component';
import { DepositComponent } from './deposit/deposit.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    HeaderComponent,
    SidebarComponent,
    JobsComponent,
    WorkInProgressComponent,
    CompletedWorksComponent,
    JobByIdComponent,
    DepositComponent,
    ProfileComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
