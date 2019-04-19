import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'people/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
