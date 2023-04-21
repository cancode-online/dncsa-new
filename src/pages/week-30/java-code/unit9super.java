import java.util.*;

// Parent class
class Parent {
    // Declare a protected instance variable called "name"
    protected String name;

    // Create a constructor that takes a String parameter "name"
    public Parent(String name) {
        // Set the "name" instance variable to the value passed in as a parameter
        this.name = name;
    }

    // Create a method that prints the name to the console
    public void printName() {
        System.out.println("My name is " + name);
    }
}

// Child class that extends Parent class
class Child extends Parent {
    // Declare a private instance variable called "age"
    private int age;

    // Create a constructor that takes a String parameter "name" and an integer parameter "age"
    public Child(String name, int age) {
        // Call the constructor of the parent class with the "name" parameter using the "super" keyword
        super(name);
        // Set the "age" instance variable to the value passed in as a parameter
        this.age = age;
    }

    // Create a method that prints the age to the console
    public void printAge() {
        System.out.println("I am " + age + " years old");
    }

    @Override
    public void printName() {
        super.printName();
        System.out.println("And I'm a child!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Create an object of Parent class with name "John"
        Parent parent = new Parent("John");
        // Call printName() method of Parent class
        parent.printName();

        // Create an object of Child class with name "Jane" and age 5
        Child child = new Child("Jane", 5);
        // Call printName() method of Child class
        child.printName();
        // Call printAge() method of Child class
        child.printAge();
    }
}