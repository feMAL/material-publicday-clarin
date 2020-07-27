import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { EditComponent } from './edit/edit.component';

import { SharedModule } from '../shared/shared.module'
import { ComponentsModule } from '../components/components.module';
//import { AppRoutingModule } from '../app-routing.module';


import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomeComponent,
    ListsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule,
    ComponentsModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class PagesModule { }
