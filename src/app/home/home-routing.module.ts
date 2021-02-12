import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'Clint',
    loadChildren: () => import('../home/clint/clint-routing.module').then(m => m.ClintRoutingModule)
  },
  {
    path: 'Admin',
    loadChildren: () => import('../home/admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
