---
title: Unit 5
date: '2023-04-21'
summary: 'Lesson on topics covered in AP CSA Unit 5 (Classes)'
tags: ['lesson', 'Unit 5']
type: 'page'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import classExample1 from './code/classExample1.java?raw';
	import unit9super from './code/unit9super.java?raw';
    import unit9polymorphism from './code/unit9polymorphism.java?raw';
	import hellofoo from './code/hellofoo.java?raw';
    import bookstuff from './code/bookstuff.java?raw';
	import gettersetter from './code/gettersetter.java?raw';
	import staticexample from './code/staticexample.java?raw';
</script>

# Unit 5: Java Classes

> 5 - 7.5% of the AP EXam will be on this unit

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

Notice how there was a "public" keyword at the start of every property on the "Book" class? There are multiple keywords which alter how to program may interact with this property. When a attribute or variable on a class uses the "private" keyword then the attribute becomes inaccessible to outside code. Only the class that contains the attribute may access it. This applies to methods as well.

We can still access the private attributes and methods from outside the class by creating public getters and setters. The terms getter and setter are just literary sugar for a public method that return a private property.

Below is an example of a class using getters and setters.

<Runnable code={gettersetter} lang={'java'} title={'gettersetter.java'}/>

### Static, This and Scope

The keyword static can be chained onto a property (attribute or method) in a class to alter its function. Normally, when you create a new instance of a class, every property will be unique to that class instance. This means when you initialize a class called "book" which contains a title property, that title property will be unique to that instance.

However, static properties are properties which can be accessed with or without creating a class instance, and are not bound to any specific class.

The "this" keyword refers to the class it is called inside of. This keyword allows you to access all defined attributes and method on the class.This is a concept better illustrated with code rather than words.

Scope is something present in almost every programming language and is a very important concept to know. Scope refers to the level at which the computer program can "see" code. Scope is best illustrated not with words but code.

<Runnable code={staticexample} lang='java' title={'static.java'}/>

## Hack (Putting it all together):

> Demonstrate the usage of classes and core concepts of unit 5

#### Create a class and tester method which incorporates all core ideas taught in this post

1. Class which has a constructor which sets at least 1 public and 1 private attribute (incorporate "this" keyword)
2. Class which has public and private attributes and methods
3. Class which has at least 1 static attribute
4. Class which has getters and setters for at least 1 private attribute

Make sure to create a tester method that verifies that your class is working and shows the getters and setters working
