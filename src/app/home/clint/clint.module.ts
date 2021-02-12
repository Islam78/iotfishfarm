import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClintRoutingModule } from './clint-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {ChartModule} from 'primeng/chart';
import { LiveComponent } from './live/live/live.component';
import { TranslateModule } from '@ngx-translate/core';
import { KnobModule } from 'primeng/knob';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';


@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    ClintRoutingModule,
    SharedModule,
    ChartModule,
    TranslateModule,
    KnobModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule
  ]
})
export class ClintModule { }
