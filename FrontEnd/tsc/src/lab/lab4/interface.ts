// Định nghĩa một interface Person
interface Person {
    name: string;
    age: number;
    introduce(): void;
}


interface Student extends Person {
    studentId: string;
    study(): void;
}

class StudentInfo implements Student {
    name: string;
    age: number;
    studentId: string;

    constructor(name: string, age: number, studentId: string) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }

    // Phương thức introduce từ interface Person
    introduce(): void {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }

    // Phương thức study từ interface Student
    study(): void {
        console.log(`I'm studying with student ID ${this.studentId}.`);
    }
}

// Tạo một đối tượng từ class StudentInfo
let student1: Student = new StudentInfo("John", 20, "ST12345");
student1.introduce(); // Kết quả: Hi, I'm John and I'm 20 years old.
student1.study(); // Kết quả: I'm studying with student ID ST12345.
