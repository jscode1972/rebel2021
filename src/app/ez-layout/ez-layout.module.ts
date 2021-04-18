import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzLayoutComponent } from './ez-layout.component';
import { EzCenterComponent } from './ez-center/ez-center.component';
import { EzButtonComponent } from './ez-button/ez-button.component';
import { EzToolbarComponent } from './ez-toolbar/ez-toolbar.component';
import { EzCalendarComponent } from './ez-calendar/ez-calendar.component';

@NgModule({
  declarations: [
    EzLayoutComponent,
    EzCenterComponent,
    EzButtonComponent,
    EzToolbarComponent,
    EzCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EzLayoutComponent
  ]
})
export class EzLayoutModule { }
