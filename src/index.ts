import { print } from "./print";
import { Observable } from 'rxjs';

const observable = Observable.create((observer: any): void => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');
});


observable.subscribe(
    (x: any) => print(x),
    (error: any) => print('Error: ' + error),
    () => print('Completed')
);