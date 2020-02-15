import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './components/todos/todos.component';

import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  {path: '', component: TodosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
