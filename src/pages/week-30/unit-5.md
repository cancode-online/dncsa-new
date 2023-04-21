---
title: Unit 5
date: '2023-04-21'
summary: 'Lesson on topics covered in AP CSA Unit 5 (Classes)'
tags: ['lesson', 'Unit 5']
type: 'page'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import classExample1 from './java-code/classExample1.java?raw';
	import unit9super from './java-code/unit9super.java?raw';
    import unit9polymorphism from './java-code/unit9polymorphism.java?raw';
	import hellofoo from './java-code/hellofoo.java?raw';
</script>

# Unit 5: Java Classes

> 5 - 7.5% of the AP EXam will be on this unit

## Lesson 1 - Classes (5.1, 5.2)

Java is an Object Oriented programming language or OOP for short. In OOP we use classes to create objects. Classes are the blueprints for objects. They define the attributes and methods that an object will have.

The following code segment is an example of a Java class ("Hello world"):

<Runnable code={classExample1} lang={'java'} title={'hello-world.java'}/>

We can super-power our classes by adding constructors. Constructors are special methods that are called when an object is created. They are used to initialize the attributes of an object. The following code segment is an example of a Java class with a constructor:

<Runnable code={hellofoo} lang={'java'} title={'hello-foo.java'}/>

We can make our classes even more powerful by giving them attributes and methods. Attributes are variables that are part of a class. Methods are functions that are part of a class. The following code segment is an example of a Java class with attributes and methods:

## Lesson 1 - Superclasses and Subclasses (9.1)

***

### What is a Superclass?

<blockquote>
<details>
<summary>Superclass</summary>
A <strong>superclass</strong> is a class, just like any other Java class, but is used as a <strong>source for methods and attributes to be used in another class</strong>.
</details>
</blockquote>

### What is a Subclass?

<blockquote>
<details>
<summary>Subclass</summary>
A <strong>subclass</strong> is a class, just like any other Java class, but it <strong>inherits methods and attributes from a superclass</strong>.
</details>
</blockquote>

#### <mark>Inheritance</mark> is this process of passing down methods from a one class to a different class!

<br>

***

### Identify the Superclass and the Subclass:

```java

class Vehicle {

    // methods and attributes

}

class Car extends Vehicle {

    // methods and attributes

}

```

<blockquote>

<details>
<summary>Explanation</summary>
The <strong>Car</strong> class is a <strong>subclass</strong>, <mark>EXTENDING</mark> the attributes and methods of the <strong>Vehicle superclass</strong>
</details>

</blockquote>

## Hack 1:
> Use the code above as a template (Steps Below):
1. Create a "name" attribute in the Vehicle class.
2. Create "honk" method that prints a console message in the Vehicle class. 
3. Create a Car class that extends the Vehicle class
4. Create an object in the Car class
5. Call the inherited "honk" method through the Car object
6. Print the inherited "name" attribute through the Car object

*** 

## Lesson 2 - Writing Subclasses (9.2, 9.3, 9.4)

### Subclass Constructors and Overriding:

- Subclass constructors can be written normally, with the addition of the **super** keyword
- **super** refers to the parent class constructor, allowing the subclass to access the parent class's attributes
- minimizes code duplication
- Methods can be overridden and modified using **super** keyword as well

#### This may look something like this:

<details>
<summary>Code Example</summary>

<Runnable code={unit9super} lang={'java'} title={'Super Keyword Example'}/>

</details>

***

## Lesson 3 - Polymorphism (9.6)

### What is Polymorphism?

<details>
<summary>Explanation</summary>

- Its a big word, but its quite simple
- It literally means "_having multiple forms_"
- How it translates to computer science:
    - Polymorphism allows you to **access objects of different types through the same superclass**

</details>

### How does this work?

- For example, lets say we have a parent Superclass called `Student`
- Lets now create 2 Subclasses called `MathStudent` and `ScienceStudent`
    - If we create the object `Student Akhil = new ScienceStudent();`, our student object will take the form of the ScienceStudent "template", in a way
    - This means that **if the `ScienceStudent` class has any overriden methods**, any calls to those methods **will run throught the `ScienceStudent` subclass instead of the `Student` superclass**
    - As a result, our `Student` object has now taken the form of the `ScienceStudent` class
    - This can be done with many other subclasses, taking many forms, hence the name, **polymorphism**.

<details>
<summary>Code Example</summary>

<Runnable code={unit9polymorphism} lang={'java'} title={'Polymorphism Example'}/>

</details>

## Hack 2:
> Demonstrate the usage of polymorphism and overriding methods
1. temp
2. temp
3. temp