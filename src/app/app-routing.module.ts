import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { ListsComponent } from './pages/lists/lists.component'
import { EditComponent } from './pages/edit/edit.component'

const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'lists', component: ListsComponent },
      { path: 'edit/:id', component: EditComponent }
      //{ path: '**', pathMatch:'full', redirectTo: 'lists' }
    ]
  },
  { path: '**', pathMatch:'full', redirectTo: 'home/lists' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
