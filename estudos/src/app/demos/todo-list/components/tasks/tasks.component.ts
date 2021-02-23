import { Component, OnInit, OnDestroy } from 'arg/src/app/demos/todo-list/components/tasks/node_modules/arg/src/app/demos/todo-list/components/tasks/node_modules/@angular/core';

import { TasksService } from 'estudos/src/app/demos/todo-list/todo.service';
import { Observable, Subscription } from 'arg/src/app/demos/todo-list/components/tasks/node_modules/arg/src/app/demos/todo-list/components/tasks/node_modules/rxjs';
import { Store } from 'estudos/src/app/demos/todo-list/todo.store';
import { map } from 'arg/src/app/demos/todo-list/components/tasks/node_modules/arg/src/app/demos/todo-list/components/tasks/node_modules/rxjs/operators';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>
  subscription: Subscription;

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit() {
    this.todolist$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));

      this.subscription = this.taskService.getTodoList$.subscribe();
  } 

  onToggle(event) {
    this.taskService.toggle(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
