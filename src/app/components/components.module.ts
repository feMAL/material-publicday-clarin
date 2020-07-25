import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesComponent } from './dates/dates.component';

import { AppRoutingModule } from '../app-routing.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DatesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    DatesComponent
  ]
})
export class ComponentsModule { }
