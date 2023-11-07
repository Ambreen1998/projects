var Student = /** @class */ (function () {
    function Student(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return Student;
}());
var Course = /** @class */ (function () {
    function Course(code, name, instructor) {
        this.code = code;
        this.name = name;
        this.instructor = instructor;
    }
    return Course;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
        this.courses = [];
    }
    StudentManagementSystem.prototype.addStudent = function (id, name, email) {
        var student = new Student(id, name, email);
        this.students.push(student);
    };
    StudentManagementSystem.prototype.addCourse = function (code, name, instructor) {
        var course = new Course(code, name, instructor);
        this.courses.push(course);
    };
    StudentManagementSystem.prototype.enrollStudent = function (studentId, courseCode) {
        var student = this.students.find(function (s) { return s.id === studentId; });
        var course = this.courses.find(function (c) { return c.code === courseCode; });
        if (student && course) {
            // Implement enrollment logic here
        }
    };
    StudentManagementSystem.prototype.getStudentDetails = function (studentId) {
        return this.students.find(function (s) { return s.id === studentId; });
    };
    StudentManagementSystem.prototype.getCourseDetails = function (courseCode) {
        return this.courses.find(function (c) { return c.code === courseCode; });
    };
    return StudentManagementSystem;
}());
// Example usage:
var sms = new StudentManagementSystem();
sms.addStudent(1, "Alice", "alice@example.com");
sms.addStudent(2, "Bob", "bob@example.com");
sms.addCourse("CS101", "Introduction to Programming", "Professor Smith");
sms.addCourse("MATH201", "Calculus I", "Professor Johnson");
sms.enrollStudent(1, "CS101");
sms.enrollStudent(2, "MATH201");
console.log(sms.getStudentDetails(1));
console.log(sms.getCourseDetails("CS101"));
