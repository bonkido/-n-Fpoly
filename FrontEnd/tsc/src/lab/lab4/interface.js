// Triển khai interface Student trong class StudentInfo
var StudentInfo = /** @class */ (function () {
    function StudentInfo(name, age, studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }
    // Phương thức introduce từ interface Person
    StudentInfo.prototype.introduce = function () {
        console.log("Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    // Phương thức study từ interface Student
    StudentInfo.prototype.study = function () {
        console.log("I'm studying with student ID ".concat(this.studentId, "."));
    };
    return StudentInfo;
}());
// Tạo một đối tượng từ class StudentInfo
var student1 = new StudentInfo("John", 20, "ST12345");
student1.introduce(); // Kết quả: Hi, I'm John and I'm 20 years old.
student1.study(); // Kết quả: I'm studying with student ID ST12345.
