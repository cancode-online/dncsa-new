---
title: JavaScript Tutorial
date: '2022-09-19'
summary: 'Quick launch into Variables, Functions, Arrays, IJavaScript HTML, using Jupyter Notebooks,'
tags: []
type: 'page'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import Hello from './code/Hello.js?raw';
  import VarHello from './code/VarHello.js?raw';
  import LogItHello from './code/LogItHello.js?raw';
  import ReuseLogIt from './code/ReuseLogIt.js?raw';
  import TypeOf from './code/TypeOf.js?raw';
  import Person from './code/Person.js?raw';
  import StudentArray from './code/StudentArray.js?raw';
  import ClassroomToHtml from './code/ClassroomToHtml.js?raw';
  import Timer from './code/Timer.js?raw';
  import PrintTable from './code/PrintTable.js?raw';
</script>

## JavaScript references
> JavaScript is the most important language you need to learn as a frontend developer. It's a great first language for web developers to learn.

- [W3Schools](https://www.w3schools.com/js/)  - reference

- [feecodecamp.org](https://www.freecodecamp.org/) - pbl

- [javascript30.com](https://javascript30.com/) - pbl

### console.log output
Output to console using the classic programming introduction using a "Hello, World!" message.     
- The command or function is <mark>console.log()</mark>
- "Hello, World" is a String literal. This is the referred to as <mark>Static text</mark>, as it does not change.
- "Hello, World" is a parameter to the console.log command.
- The console.log <mark>command outputs the parameter to the console</mark>, so you can see it in this Jupyter document.
- Note, in a Web Application, console.log is used for debugging and is not visible from the browser via HTML.  It is used behind the scenes, when using Inspect->Console from the browser.

<Runnable code={Hello} lang={'js'} title={'Hello.js'}/>


### console.log output showing use of variable
This second example is a <mark>sequence of code</mark>, two or more lines forms a sequence.  This example defines a variable, then outputs the msg to terminal.  
- The variable "var msg =" is used to capture the data
- The console.log(msg) outputs to console

<Runnable code={VarHello} lang={'js'} title={'VarHello.js'}/>

### console.log output showing use of a function
This example passes the previously defined variable "msg" to the newly defined "function logIt(output)".
- There are two steps in the code, the <mark>definition of the function and the call to the function</mark>.
    - "function logIt(output)" and everything between curly braces is the definitions of the function.
    - "logIt(msg)" is the call to the function, this actually activates the function.  If you remove this line you will not receive any output to console.
- Since the variable "msg" was defined in previous cell, it is used a parameter when calling the logMessage function.

<Runnable code={LogItHello} lang={'js'} title={'LogItHello.js'} historical={[VarHello]}/>

### Showing reuse of a function
Now that a function is defined, it can be called from any of the subsequent cell in the Jupyter notebook.  A function/method, is a process of creating a <mark>procedural abstraction</mark>. This a programming practice to promote reuse versus coding the same thing over and over.
- First call sends a different string message
- Second call sends a number

<Runnable code={ReuseLogIt} lang={'js'} title={'ReuseLogIt.js'} historical={[VarHello, LogItHello]}/>

### Dynamic or Loosely typed language (string, number)
<mark>JavaScript is a loosely typed language</mark>, meaning you don't have to specify what type of information will be stored in a variable in advance.  The variable type is determined at runtime.  This is similar to Python and most interpretive languages.  Java which is a compiled language is strongly typed, thus you will see string, integer, double, and object in the source code. In JavaScript, the "typeof" keyword returns the type.

<Runnable code={TypeOf} lang={'js'} title={'TypeOf.js'}/>

### Build a Person Function/Class object and JSON
JavaScript functions have special properties and syntax is shown in many ways.  In fact, a Class in JavaScript is a special function.  Jupyter Notebooks seems to be more friendly to "function" definitions versus "Class", thus this lesson uses "function" and "prototype" versus "Class".
- <mark>Definition of function allows for a collection of data</mark>, the "function Person" allows programmer to retain name, github id, and class of designation.
- <mark>Definition of a prototype allow for the definition of a method associated with the function</mark> , the "Person.prototype.toJSON" allows the collection of data to be expressed in a json/string versus JavaScript object.
- <mark>Instance of a function</mark>, the "var teacher = new Person("Mr M", "jm1021", 1977)" line makes a variable "teacher" which is an object representation of "function Person".

<Runnable code={Person} lang={'js'} title={'Person.js'} historical={[TypeOf]}/>

### Build a Classroom Array/List of Persons and JSON
Many key elements are shown again.  New elements include...
- <mark>Building an Array</mark>, "var students" is an array of many persons
- Building a Classroom, this show <mark>forEach iteration</mark> through an array and <mark>.push adding</mark> to an array.  These are key concepts in all programming languages.

<Runnable code={StudentArray} lang={'js'} title={'StudentArray.js'} historical={[TypeOf, Person]}/>

### IJavaScript and Table formatting using toHTML method
This example builds a <mark>Classroom method _toHTML</mark> which is passed to the IJavaScript interpreter $$.html which renders output similarly to a real website.  
- JavaScript in the _toHTML method is broken into three parts...
    - Style part is building CSS inline formatting
    - Body part is constructing the Table Rows (tr), Table Headings (th), and Table Data (td).  The table data is obtained from a Classroom object.  The JavaScript for loop allows the construction of a new row of data for each index in the Array.
    - Return part create the HTML fragment for rendering
- The last line in the example <mark>$$.html is IJavaScript HTML interpreter</mark> and by passing the parameter of the _toHTML method it obtains HTML to render

[Reference](http://n-riesco.github.io/ijavascript/doc/custom.ipynb.html?ref=morioh.com&utm_source=morioh.com)

<Runnable code={ClassroomToHtml} lang={'js'} title={'ClassroomToHtml.js'} historical={[TypeOf, Person, StudentArray]}/>

# Timer
There are ways to setup a delay.

[Reference](http://n-riesco.github.io/ijavascript/doc/async.ipynb.html?ref=morioh.com&utm_source=morioh.com)

<Runnable code={Timer} lang={'js'} title={'Timer.js'}/>

## Hacks
> Objective of JavaScript is to produce frontend code.  Working in Jupyter Notebooks could help in the process of visualizing design with short and interactive feedback.  However, my hope is that you move to Fastpages and play with Frontend code in that environment and do the REAL thing.  Here is my suggestion.

> Design UI screens that are prototypes for your project.  Design at least one screen with data from a structure (like Person data above),  that is used to dynamically create HTML. As an alternative to HTML text method above, look at Jokes post and usage createElement...

<Runnable code={PrintTable} lang={'js'} title={'PrintTable.js'}/>

