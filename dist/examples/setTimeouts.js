import { print } from "../src/print";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/share';
function add1(num) {
    return num + 1;
}
function add2(num) {
    return num + 2;
}
function add3(num) {
    return num + 3;
}
function add100(num) {
    return num + 100;
}
var observable = Observable.create(function (param) {
    try {
        param.next(add1(10));
        param.next(add2(10));
        param.next(add3(10));
        setTimeout(function () { return param.next(add100(10)); }, 2000);
        param.next(add3(10));
        param.next(add3(10));
        param.next(add3(10));
    }
    catch (err) {
        print('cbsError: ', err);
    }
});
var observer = observable.subscribe(function (x) { return print(x); }, function (error) { return print('Error: ', error); }, function () { return print('Completed'); });
setTimeout(function () {
    observer.unsubscribe();
    print('Unsubscribed');
}, 4000);
//# sourceMappingURL=setTimeouts.js.map