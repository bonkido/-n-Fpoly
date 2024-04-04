export class Student {
    constructor(firstName, lastName, middleInitial) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.middleInitial} ${this.lastName}`;
    }
}
