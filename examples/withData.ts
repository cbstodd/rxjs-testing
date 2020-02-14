// import { print } from "../src/print";
import { TodoService, Todos } from "../data/todos";
import { Observable, of } from "rxjs";

const todoService = new TodoService();

const todoObs$ = Observable.create((param: any): void => {
    const todos: Todos[] = todoService.todos;
    try {
        param.next(todos);
    } catch (err) {
        console.error('cbsError: ', err);
    }

});

const allTodos = todoObs$.subscribe((_todos: Todos[]): void => {
    _todos.filter((td) => {
        if (td.completed) {
            // Do something with Completed Todos
            console.table(td);
        } else {
            return of(null);
        }
    });
},
    (error: any) => console.error('cbsError: ', error),
    () => console.log('Completed')
);


setTimeout(() => {
    console.log(allTodos);
    allTodos.unsubscribe();
    console.info('Unsubscribed');
}, 3000);


