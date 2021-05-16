import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Sidebar } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    InputTextModule,
    FormsModule,
  ]
})
export class HeaderModule { }
