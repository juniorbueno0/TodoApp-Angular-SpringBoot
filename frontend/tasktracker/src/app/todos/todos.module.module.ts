// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

// COMPONENTS
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoCompletedComponent } from './components/todo-completed/todo-completed.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodoCompletedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  exports:[
    TodoListComponent,
    TodoAddComponent,
    TodoCompletedComponent
  ]
})
export class TodosModule { }
