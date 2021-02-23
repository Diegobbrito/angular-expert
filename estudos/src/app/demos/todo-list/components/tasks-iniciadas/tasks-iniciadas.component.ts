import { Component, OnInit } from 'arg/src/app/demos/todo-list/components/tasks-iniciadas/node_modules/arg/src/app/demos/todo-list/components/tasks-iniciadas/node_modules/@angular/core';
import { Observable } from 'arg/src/app/demos/todo-list/components/tasks-iniciadas/node_modules/arg/src/app/demos/todo-list/components/tasks-iniciadas/node_modules/rxjs';
import { TasksService } from 'estudos/src/app/demos/todo-list/todo.service';
import { Store } from 'estudos/src/app/demos/todo-list/todo.store';
import { map } from 'arg/src/app/demos/todo-list/components/tasks-iniciadas/node_modules/arg/src/app/demos/todo-list/components/tasks-iniciadas/node_modules/rxjs/operators';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]>;
  
  constructor(private tasksService: TasksService, private store: Store) {}

  ngOnInit() {
    this.iniciados$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
      )
  }

  onToggle(event) {
    this.tasksService.toggle(event);
  }
}
