class Student {
    constructor(public id: number, public name: string, public email: string) {}
}

class Course {
    constructor(public code: string, public name: string, public instructor: string) {}
}

class StudentManagementSystem {
    students: Student[] = [];
    courses: Course[] = [];

    addStudent(id: number, name: string, email: string) {
        const student = new Student(id, name, email);
        this.students.push(student);
    }

    addCourse(code: string, name: string, instructor: string) {
        const course = new Course(code, name, instructor);
        this.courses.push(course);
    }

    enrollStudent(studentId: number, courseCode: string) {
        const student = this.students.find((s) => s.id === studentId);
        const course = this.courses.find((c) => c.code === courseCode);

        if (student && course) {
            // Implement enrollment logic here
        }
    }

    getStudentDetails(studentId: number) {
        return this.students.find((s) => s.id === studentId);
    }

    getCourseDetails(courseCode: string) {
        return this.courses.find((c) => c.code === courseCode);
    }
}

// Example usage:
const sms = new StudentManagementSystem();
sms.addStudent(1, "Alice", "alice@example.com");
sms.addStudent(2, "Bob", "bob@example.com");
sms.addCourse("CS101", "Introduction to Programming", "Professor Smith");
sms.addCourse("MATH201", "Calculus I", "Professor Johnson");
sms.enrollStudent(1, "CS101");
sms.enrollStudent(2, "MATH201");
console.log(sms.getStudentDetails(1));
console.log(sms.getCourseDetails("CS101"));
