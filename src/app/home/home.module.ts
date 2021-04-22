import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { RippleModule } from 'primeng/ripple';
import { ReportsComponent } from './clint/reports/reports.component';
import { ClintModule } from 'src/app/home/clint/clint.module'
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
// for test
import {StepsModule} from 'primeng/steps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { KnobModule } from 'primeng/knob';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ReportsComponent, DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule,
    RippleModule,
    ClintModule,
    ChartModule,
    ToastModule,
    StepsModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    KnobModule
  ]

})
export class HomeModule { }
