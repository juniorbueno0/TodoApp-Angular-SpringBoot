import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoAddComponent } from './todos/components/todo-add/todo-add.component';
import { TodoCompletedComponent } from './todos/components/todo-completed/todo-completed.component';

const routes: Routes = [
  {path:'list', component:TodoListComponent},
  {path:'create', component:TodoAddComponent},
  {path:'completed', component:TodoCompletedComponent},
  {path:'update/:id', component:TodoAddComponent},
  {path:'', component:TodoListComponent, pathMatch:'full'},
  {path:'**', redirectTo:'list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
