import java.util.*;

// Parent class
class Student {
    protected String name;
    protected int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void study() {
        System.out.println(name + " is studying");
    }
}

// Subclass of Student that adds a field for major
class ScienceStudent extends Student {
    private String major;

    public ScienceStudent(String name, int age, String major) {
        super(name, age);
        this.major = major;
    }

    // Overrides the study() method in the parent class
    @Override
    public void study() {
        System.out.println(name + " is studying " + major);
    }
}

public class Main {
    public static void main(String[] args) {
        // Create an array of Student objects
        Student[] students = new Student[3];
        students[0] = new Student("John", 18);
        students[1] = new ScienceStudent("Jane", 17, "Biology");
        students[2] = new ScienceStudent("Bob", 16, "Physics");

        // Iterate through the array and call the study() method on each object
        for (Student student : students) {
            student.study();
        }
    }
}
