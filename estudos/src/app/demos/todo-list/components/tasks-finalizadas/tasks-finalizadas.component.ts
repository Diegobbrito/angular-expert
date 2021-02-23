import { Component, OnInit } from 'arg/src/app/demos/todo-list/components/tasks-finalizadas/node_modules/arg/src/app/demos/todo-list/components/tasks-finalizadas/node_modules/@angular/core';
import { Observable } from 'arg/src/app/demos/todo-list/components/tasks-finalizadas/node_modules/arg/src/app/demos/todo-list/components/tasks-finalizadas/node_modules/rxjs';
import { TasksService } from 'estudos/src/app/demos/todo-list/todo.service';
import { Store } from 'estudos/src/app/demos/todo-list/todo.store';
import { map } from 'arg/src/app/demos/todo-list/components/tasks-finalizadas/node_modules/arg/src/app/demos/todo-list/components/tasks-finalizadas/node_modules/rxjs/operators';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html'
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]>;
  
  constructor(private tasksService: TasksService, private store: Store) { }

  ngOnInit() { 
    this.finalizados$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.finalizado)));
  }

  onToggle(event) {
    this.tasksService.toggle(event);
  }
}