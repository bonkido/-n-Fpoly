import { Person } from '../models/person';

export class Student implements Person {
    fullName : string;
    firstName : string;
    middleInitial : string;
    lastName : string;
    constructor(firstName : string, lastName : string , middleInitial : string){
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.middleInitial} ${this.lastName}`;
    }
}