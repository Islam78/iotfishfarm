import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BadgeModule } from 'primeng/badge';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TranslateModule } from '@ngx-translate/core';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    SlideMenuModule,
    ButtonModule,
    SidebarModule,
    SelectButtonModule,
    BadgeModule,
    TriStateCheckboxModule,
    TranslateModule,
    RippleModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class SharedModule { }
