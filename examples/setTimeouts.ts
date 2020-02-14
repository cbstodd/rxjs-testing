import { print } from "../src/print";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/share';

function add1(num: number): number {
    return num + 1;
}
function add2(num: number): number {
    return num + 2;
}
function add3(num: number): number {
    return num + 3;
}
function add100(num: number): number {
    return num + 100;
}

const observable = Observable.create((param: any): void => {
    try {
        param.next(add1(10));
        param.next(add2(10));
        param.next(add3(10));
        setTimeout(() => param.next(add100(10)), 2000);
        param.next(add3(10));
        param.next(add3(10));
        param.next(add3(10));
    } catch (err) {
        print('cbsError: ', err);
    }
});


const observer = observable.subscribe(
    (x: any) => print(x),
    (error: any) => print('Error: ', error),
    () => print('Completed')
);

setTimeout(() => {
    observer.unsubscribe();
    print('Unsubscribed');
}, 4000);


