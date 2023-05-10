---
title: 'Using Java Objects'
date: '2022-08-29'
summary: "Learn the relationship between a Class and an Object. A Class is a template for an Object. An Object is an instances of a Class. Learning can be done in different methods and different order. This article illustrates multiple methods and learnings obtained using different approaches."
tags: []
type: 'page'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import Menu from './code/Menu.java?raw';
    import MenuJFrame from './code/MenuJFrame.java?raw';
</script>

## Console Based Menu
Java imports allow user input and console output to be displayed in Terminal 

Objects Used
- Makes Object from Scanner Class to obtain inputs / menu selection from User
- Use System Class, to call static methods System.out.print and System.out.println to output to console
- User Math Class, to call static method Math.random() to generate random number

Other College Board Topics
- A 2D array is used to store COLORS
- A Control Structure, Switch, is used to process Menu select to code that performs related action

Key PBL Topic
- Menu class when instantiated with new Menu() takes over Frontend experience with user.  This is relevant to Draw Lab in this article and how Spring Boot works in Web programming.  Objects are intended to encapsulate Frontend, Backend or experience ...  Web Site control flow, Database CRUD operations, or a Menu in terminal (this example)   

<Runnable code={Menu} lang={'java'} title={'Menu.java'}/>

## Desktop GUI Menu
Swing and AWT imports allow Java to provide a Graphical User Interface on the desktop.

Other College Board Topics
- A 1D array is used to store MENUS
- A Control Structure, if-else if-else, is used to process Menu selection to code that performs related action

Using Objects
- Javax Swing UI (JFrame)
- Timer with a TimerTask to allow action to repeatedly occur without halting thread.

<Runnable code={MenuJFrame} lang={'java'} title={'MenuJFrame.java'}/>

## Code.org Object Oriented Programming - The Neighborhood
Students learn fundamental Java concepts as they navigate and interact with The Neighborhood with Painter objects and create new types of Painters to expand the capabilities of their programs.

College Board Topics
- Inheritance (extends) is introduced early in this activity
- Conditional statements, While loops, and Boolean expressions

Using Objects
- Code.org Painter class and objects

Activity Page Start: [Code.org CSA1](https://studio.code.org/s/csa1-2022)

![Visuals](images/code_org_painter.png)


## Hacks
College Board and CTE competences.  
- Documentation / Analysis. Describe with Markdown Cell(s) and triple backtick code fragments that answers to the following from your work...
    - Explain where a Class is defined 
    - Explain where an instances of a Class is defined
    - Explain where an object is Calling a Method
    - Explain where an object is Mutating data
    - Describe Console, GUI differences, or Code.org differences.
- Exploration work
Build a new Console or GUI lab for your own solution of interest, this is great opportunity to visualize data from Math, Physics, or other class using Math library.  Look to make these changes in your work 
    - Make constructors of different signatures.
    - Use Wrapper Classes of Integer and Double for defining object instance or static data in the Class
    - Use the [Math Class](https://www.javatpoint.com/java-math) in performing calculations
- Code.org learning
Follow the Neighborhood lessons and work through the OOP Unit.
