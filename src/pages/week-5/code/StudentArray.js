// define a student Array of Person(s)
var students = [ 
    new Person("Anthony", "tonyhieu", 2022),
    new Person("Bria", "B-G101", 2023),
    new Person("Allie", "xiaoa0", 2023),
    new Person("Tigran", "Tigran7", 2023),
    new Person("Rebecca", "Rebecca-123", 2023)
];

// define a classroom and build Classroom objects and json
function Classroom(teacher, students){ // 1 teacher, many student
    // start Classroom with Teacher
    teacher.setRole("Teacher");
    this.teacher = teacher;
    this.classroom = [teacher];
    // add each Student to Classroom
    this.students = students;
    this.students.forEach(student => { student.setRole("Student"); this.classroom.push(student); });
    // build json/string format of Classroom
    this.json = [];
    this.classroom.forEach(person => this.json.push(person.toJSON()));
}

// make a CompSci classroom from formerly defined teacher and students
compsci = new Classroom(teacher, students);

// output of Objects and JSON in CompSci classroom
logItType(compsci.classroom);  // constructed classroom object
logItType(compsci.classroom[0].name);  // abstract 1st objects name
logItType(compsci.json[0]);  // show json conversion of 1st object to string
logItType(JSON.parse(compsci.json[0]));  // show JSON.parse inverse of JSON.stringify