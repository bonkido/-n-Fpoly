"use strict";
class StudentInfo {
    constructor(name, age, studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }
    // Phương thức introduce từ interface Person
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
    // Phương thức study từ interface Student
    study() {
        console.log(`I'm studying with student ID ${this.studentId}.`);
    }
}
// Tạo một đối tượng từ class StudentInfo
let student1 = new StudentInfo("John", 20, "ST12345");
student1.introduce(); // Kết quả: Hi, I'm John and I'm 20 years old.
student1.study(); // Kết quả: I'm studying with student ID ST12345.
