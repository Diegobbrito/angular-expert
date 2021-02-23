import { Injectable } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/@angular/core';
import { HttpClient } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/@angular/common/http';
import { Task } from 'estudos/src/app/demos/todo-list/task';
import { Observable } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/rxjs';
import { Store } from 'estudos/src/app/demos/todo-list/todo.store';
import { tap } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/rxjs/operators';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient, private store: Store) { }
  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist')
    .pipe(
      tap(next => this.store.set('todolist', next)));

    toggle(event: any) {
      this.http
        .put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
        .subscribe(() => {

          const value = this.store.value.todolist;
          
          const todolist = value.map((task: Task) => {
            if (event.task.id === task.id) {
              return { ...task, ...event.task}
            } else {
              return task;
            }
          });

          this.store.set('todolist', todolist);
        });
    }

}