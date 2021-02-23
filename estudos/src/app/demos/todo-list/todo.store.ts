import { Task } from 'estudos/src/app/demos/todo-list/task';
import { BehaviorSubject, Observable } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/rxjs';
import { map } from 'arg/src/app/demos/todo-list/node_modules/arg/src/app/demos/todo-list/node_modules/rxjs/operators';

export interface State {
    todolist: Task[]
}

const state: State = {
    todolist: []
};

export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    public getTodoList() : Observable<Task[]> {
        return this.store
            .pipe(map(store => store.todolist));
    }

    set(name: string, state: any) {
        this.subject.next({ // next: seta um novo valor;
            ...this.value, [name] : state
        })
    }
}