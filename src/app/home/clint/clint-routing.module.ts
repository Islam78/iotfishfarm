import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LiveComponent } from './live/live/live.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: 'Report/:id', component: ReportsComponent },
  { path: 'Live/:id', component: LiveComponent },
  { path: 'Report', pathMatch: 'full', redirectTo: 'path' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClintRoutingModule { }
