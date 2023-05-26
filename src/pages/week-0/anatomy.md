---
title: anatomy
date: '2022-08-15'
summary: "A progressive journey through Java's anatomy starting with the classic Hello, World! example."
tags: []
due_start: '2023-04-21'
due_end: '2023-04-21'
grade_total: 3
type: 'frq_assignment'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import HelloStatic from './code/HelloStatic.java?raw';
    import HelloObject from './code/HelloObject.java?raw';
    import HelloDynamic from './code/HelloObject.java?raw';
</script>

## Hello, World!

This article shows the basic language structures and constructs of Java (aka anatomy). In async order, it is critical to understand these examples and learn vocab for OOP and Creating Objects:

- [Object Oriented Programming](https://youtu.be/Wok4Xw_5cyY)
- [Creating Objects](https://youtu.be/C5Ks_u87Ltg)
- [Calling Methods](https://youtu.be/CPE_lYGCw3A)

### Static example

The class HelloStatic contains the classic "Hello, World!" message that is often used as an introduction to a programming language. The "public static void main(String[] args)", or main method, is the default runtime method in Java and has a very specific and ordered definition (signature).

The key terms in HelloStatic introduction:

- "class" is a blueprint for code, it is the code definition and must be called to run
- "method" or "static method" in this case, is the code to be run/executed, similar to a procedure
- "method definition" or "signature" are the keywords "public static void" in front of the name "main" and the parameters "String[] args" after the name.
- "method call" is the means in which we run the defined code

<Runnable code={HelloStatic} lang={'java'} title={'HelloStatic.java'}/>

### Dynamic Example

This example starts to use Java in its natural manner, using an object within the main method. This example is a very basic illustration of Object Oriente Programming (OOP). The main method is now used as a driver/tester, by making an instance of the class. Thus, it creates an Object using the HelloObject() constructor. Also, this Class contains a getter method called getHello() which returns the value with the "String hello".

The key terms in HelloStatic introduction:

- "Object Oriented Programming" focuses software design around data, or objects.
- "object" contains both methods and data
- "instance of a class" is the process of making an object, unique or instances of variables are created within the object
- "constructor" special method in class, code that is used to initialize the data within the object
- "getter" is a method that is used to extract or reference data from within the object.

<Runnable code={HelloObject} lang={'java'} title={'HelloObject.java'}/>

### Dynamic Example with two constructors

This last example adds to the basics of the Java anatomy. The Class now contains two constructors and a setter to go with the getter. Also, observe the driver/tester now contains two objects that are initialized differently, 0 and 1 argument constructor. Look at the usage of the "this" prefix. The "this" keyword helps in clarification between instance and local variable.

The key terms in HelloDynamic introduction:

- "0 argument constructor" constructor method with no parameter ()
- "1 argument constructor" construct method with a parameter (String hello)
- "this keyword" allows you to clear reference something that is part of the object, data or method
- "local variable" is a variable that is passed to the method in this example, see the 1 argument constructor as it has a local variable "String hello"
- "dynamic" versus "static" is something that has option to change, static never changes. A class (blueprint) and objects (instance of blueprint) are generally intended to be dynamic. Constructors and Setters are used to dynamically change the content of an object.
- "Java OOP, Java Classes/Objects, Java Class Attributes, Java Class Methods, Java Constructors" are explained if more complete detail in W3 Schools: https://www.w3schools.com/java/java_oop.asp

<Runnable code={HelloDynamic} lang={'java'} title={'HelloDynamic.java'}/>

## Hacks

Build your own Jupyter Notebook meeting these College Board and CTE competencies

- Explain Anatomy of a Class in comments of program (Diagram key parts of the class).
- Comment in code where there is a definition of a Class and an instance of a Class (ie object)
- Comment in code where there are constructors and highlight the signature difference in the signature
- Call non-static void methods with parameter (ie setters).

Additional requirements (Pick something)

1. Go through code progression of understanding Static Class usage versus Instance of a Class (Object).
2. Show how setters/mutators can be used to make the data in the Object dynamically change
3. Adapt a Class from example: Person: Name and Age, Dessert: Name and Cost
4. Build your own, use inspiration from examples and start building something educational in your PBL project. Now is a time to consider if you are going to be following tutorials are building your own project.
