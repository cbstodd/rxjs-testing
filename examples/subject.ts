import { print } from "../src/print";
import { Subject } from 'rxjs';

const subject = new Subject();

const obs1 = subject.subscribe((data) => print(`Observer 1: ${data}`),
    (err) => print(`cbsError: ${err}`),
    () => print(`Complete`)
);

const obs2 = subject.subscribe((data) => print(`Observer 2: ${data}`));

subject.next('Called with next');
obs1.unsubscribe();
obs2.unsubscribe();