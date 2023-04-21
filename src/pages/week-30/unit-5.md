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
    import bookstuff from './java-code/bookstuff.java?raw';
</script>

# Unit 5: Java Classes

> 5 - 7.5% of the AP EXam will be on this unit

## Lesson 1 - Classes (5.1, 5.2)

Java is an Object Oriented programming language or OOP for short. In OOP we use classes to create objects. Classes are the blueprints for objects. They define the attributes and methods that an object will have.

The following code segment is an example of a Java class ("Hello world"):

<Runnable code={classExample1} lang={'java'} title={'hello-world.java'}/>

### Constructors

We can super-power our classes by adding constructors. Constructors are special methods that are called when an object is created. They are used to initialize the attributes of an object. 

The following code segment is an example of a Java class with a constructor:

<Runnable code={hellofoo} lang={'java'} title={'hello-foo.java'}/>

### Attributes and methods

We can make our classes even more powerful by giving them attributes and methods. Attributes are variables that are part of a class. Methods are functions that are part of a class. 

The following code segment is an example of a Java class with attributes and methods:

<Runnable code={bookstuff} lang={'java'} title={'book.java'}/>

### Private getters and setters

Notice how there was a "public" keyword at the start of every property on the "Book" class? 