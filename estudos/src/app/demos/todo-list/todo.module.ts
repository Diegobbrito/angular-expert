import { NgModule } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/@angular/core';
import { CommonModule } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/@angular/common';
import { HttpClientModule } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/@angular/common/http';

import { TasksService } from 'estudos/src/app/demos/todo-list/todo.service';
import { TasksFinalizadasComponent } from 'estudos/src/app/demos/todo-list/components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from 'estudos/src/app/demos/todo-list/components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksComponent } from 'estudos/src/app/demos/todo-list/components/tasks/tasks.component';
import { ToDoListComponent } from 'estudos/src/app/demos/todo-list/components/todo-list/todo-list.component';
import { TodoComponent } from 'estudos/src/app/demos/todo-list/todo.component';
import { Store } from 'estudos/src/app/demos/todo-list/todo.store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TasksService,
    Store
  ],
  declarations: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    ToDoListComponent,
    TasksComponent
  ],
  exports: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TasksComponent,
    ToDoListComponent
  ]
})
export class TodoModule {}