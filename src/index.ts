import { Observable, from, of } from "rxjs";
import { Users, UserList } from '../data/users';

const allUsers = new UserList();


const usersCreate = Observable.create((obs: any): void => {
    obs.next(allUsers.users);
});
const usersFrom = from(allUsers.users);
const usersOf = of(allUsers.users);



// Logs users in single table array/object like of():
console.log("USERS Create NEXT:");
usersCreate.subscribe((user: Users[]) => console.table(user));

// Logs users split individually:
console.log("USERS FROM:");
usersFrom.subscribe((user: Users) => console.table(user));

// Logs users in single table array/object:
console.log("USERS OF:");
usersOf.subscribe((user: Users[]) => console.table(user));
