import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewFarmComponent } from './new-farm/new-farm.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateComponent } from './generate/generate.component';
import {TableModule} from 'primeng/table';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [NewFarmComponent, GenerateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule
  ]
})
export class AdminModule { }
