import { Student } from './models/student';
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let student = new Student('Thi', 'Hong', 'Nguyen');
document.body.innerHTML = greeter(student);
