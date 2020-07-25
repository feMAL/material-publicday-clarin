import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatesComponent } from './components/dates/dates.component'

const routes: Routes = [
  { path: 'feriados', component: DatesComponent },
  { path: '**', pathMatch:'full', redirectTo: 'feriados' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
