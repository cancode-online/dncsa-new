---
title: Unit 9
date: '2023-04-21'
summary: 'Lesson on topics covered in AP CSA Unit 9 (Inheritance)'
tags: ['lesson','Unit 9']
image: 'https://i.imgur.com/4Z4Z4Z4.png'
type: 'page'
---


# Unit 9 - Inheritance
- 5 - 10% of the test, usually about 2 to 4 MC Questions, could show up on FRQ #4, on Writing Classes

## Lesson 1 - Superclasses and Subclasses:

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
