import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { HeaderComponent } from './dashboard-components/header/header.component';
import { SidebarComponent } from './dashboard-components/sidebar/sidebar.component';
import { JobsComponent } from './jobs/jobs.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    HeaderComponent,
    SidebarComponent,
    JobsComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
