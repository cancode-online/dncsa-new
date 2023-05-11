---
title: JavaScript Tutorial
date: '2022-09-19'
summary: 'Quick launch into Variables, Functions, Arrays, IJavaScript HTML, using Jupyter Notebooks,'
tags: []
type: 'page'
---

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

<Runnable code={VarHello} lang={'java'} title={'VarHello.js'}/>

### console.log output showing use of a function
This example passes the previously defined variable "msg" to the newly defined "function logIt(output)".
- There are two steps in the code, the <mark>definition of the function and the call to the function</mark>.
    - "function logIt(output)" and everything between curly braces is the definitions of the function.
    - "logIt(msg)" is the call to the function, this actually activates the function.  If you remove this line you will not receive any output to console.
- Since the variable "msg" was defined in previous cell, it is used a parameter when calling the logMessage function.

<Runnable code={LogItHello} lang={'java'} title={'LogItHello.js'} historical={VarHello}/>

### Showing reuse of a function
Now that a function is defined, it can be called from any of the subsequent cell in the Jupyter notebook.  A function/method, is a process of creating a <mark>procedural abstraction</mark>. This a programming practice to promote reuse versus coding the same thing over and over.
- First call sends a different string message
- Second call sends a number

<Runnable code={ReuseLogIt} lang={'java'} title={'ReuseLogIt.js'} historical={}/>

```javascript
console.log("Reuse of logIT")
logIt("Hello, Students!");
logIt(2022)
```

    Reuse of logIT
    Hello, Students!
    2022


### Dynamic or Loosely typed language (string, number)
<mark>JavaScript is a loosely typed language</mark>, meaning you don't have to specify what type of information will be stored in a variable in advance.  The variable type is determined at runtime.  This is similar to Python and most interpretive languages.  Java which is a compiled language is strongly typed, thus you will see string, integer, double, and object in the source code. In JavaScript, the "typeof" keyword returns the type.

<Runnable code={Expressions} lang={'java'} title={'Expressions.java'}/>

```javascript
function logItType(output) {
    console.log(typeof output, ";", output);
}
console.log("Looking at dynamic nature of types in JavaScript")
logItType("hello"); // String
logItType(2020);    // Number
logItType([1, 2, 3]);  // Object is generic for this Array, which similar to Python List
```

    Looking at dynamic nature of types in JavaScript
    string ; hello
    number ; 2020
    object ; [ 1, 2, 3 ]


### Build a Person Function/Class object and JSON
JavaScript functions have special properties and syntax is shown in many ways.  In fact, a Class in JavaScript is a special function.  Jupyter Notebooks seems to be more friendly to "function" definitions versus "Class", thus this lesson uses "function" and "prototype" versus "Class".
- <mark>Definition of function allows for a collection of data</mark>, the "function Person" allows programmer to retain name, github id, and class of designation.
- <mark>Definition of a prototype allow for the definition of a method associated with the function</mark> , the "Person.prototype.toJSON" allows the collection of data to be expressed in a json/string versus JavaScript object.
- <mark>Instance of a function</mark>, the "var teacher = new Person("Mr M", "jm1021", 1977)" line makes a variable "teacher" which is an object representation of "function Person".

<Runnable code={Expressions} lang={'java'} title={'Expressions.java'}/>

```javascript
// define a function to hold data for a Person
function Person(name, ghID, classOf) {
    this.name = name;
    this.ghID = ghID;
    this.classOf = classOf;
    this.role = "";
}

// define a setter for role in Person data
Person.prototype.setRole = function(role) {
    this.role = role;
}

// define a JSON conversion "method" associated with Person
Person.prototype.toJSON = function() {
    const obj = {name: this.name, ghID: this.ghID, classOf: this.classOf, role: this.role};
    const json = JSON.stringify(obj);  // json/string is useful when passing data on internet
    return json;
}

// make a new Person and assign to variable teacher
var teacher = new Person("Mr M", "jm1021", 1977);  // object type is easy to work with in JavaScript
logItType(teacher);  // before role
logItType(teacher.toJSON());  // ok to do this even though role is not yet defined

// output of Object and JSON/string associated with Teacher
teacher.setRole("Teacher");   // set the role
logItType(teacher); 
logItType(teacher.toJSON());  
```

    object ; Person { name: 'Mr M', ghID: 'jm1021', classOf: 1977, role: '' }
    string ; {"name":"Mr M","ghID":"jm1021","classOf":1977,"role":""}
    object ; Person { name: 'Mr M', ghID: 'jm1021', classOf: 1977, role: 'Teacher' }
    string ; {"name":"Mr M","ghID":"jm1021","classOf":1977,"role":"Teacher"}


### Build a Classroom Array/List of Persons and JSON
Many key elements are shown again.  New elements include...
- <mark>Building an Array</mark>, "var students" is an array of many persons
- Building a Classroom, this show <mark>forEach iteration</mark> through an array and <mark>.push adding</mark> to an array.  These are key concepts in all programming languages.

<Runnable code={Expressions} lang={'java'} title={'Expressions.java'}/>

```javascript
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
```

    object ; [ Person { name: 'Mr M', ghID: 'jm1021', classOf: 1977, role: 'Teacher' },
      Person {
        name: 'Anthony',
        ghID: 'tonyhieu',
        classOf: 2022,
        role: 'Student' },
      Person { name: 'Bria', ghID: 'B-G101', classOf: 2023, role: 'Student' },
      Person { name: 'Allie', ghID: 'xiaoa0', classOf: 2023, role: 'Student' },
      Person {
        name: 'Tigran',
        ghID: 'Tigran7',
        classOf: 2023,
        role: 'Student' },
      Person {
        name: 'Rebecca',
        ghID: 'Rebecca-123',
        classOf: 2023,
        role: 'Student' } ]
    string ; Mr M
    string ; {"name":"Mr M","ghID":"jm1021","classOf":1977,"role":"Teacher"}
    object ; { name: 'Mr M', ghID: 'jm1021', classOf: 1977, role: 'Teacher' }


### IJavaScript and Table formatting using toHTML method
This example builds a <mark>Classroom method _toHTML</mark> which is passed to the IJavaScript interpreter $$.html which renders output similarly to a real website.  
- JavaScript in the _toHTML method is broken into three parts...
    - Style part is building CSS inline formatting
    - Body part is constructing the Table Rows (tr), Table Headings (th), and Table Data (td).  The table data is obtained from a Classroom object.  The JavaScript for loop allows the construction of a new row of data for each index in the Array.
    - Return part create the HTML fragment for rendering
- The last line in the example <mark>$$.html is IJavaScript HTML interpreter</mark> and by passing the parameter of the _toHTML method it obtains HTML to render

[Reference](http://n-riesco.github.io/ijavascript/doc/custom.ipynb.html?ref=morioh.com&utm_source=morioh.com)

<Runnable code={Expressions} lang={'java'} title={'Expressions.java'}/>

```javascript
// define an HTML conversion "method" associated with Classroom
Classroom.prototype._toHtml = function() {
  // HTML Style is build using inline structure
  var style = (
    "display:inline-block;" +
    "border: 2px solid grey;" +
    "box-shadow: 0.8em 0.4em 0.4em grey;"
  );

  // HTML Body of Table is build as a series of concatenations (+=)
  var body = "";
  // Heading for Array Columns
  body += "<tr>";
  body += "<th><mark>" + "Name" + "</mark></th>";
  body += "<th><mark>" + "GitHub ID" + "</mark></th>";
  body += "<th><mark>" + "Class Of" + "</mark></th>";
  body += "<th><mark>" + "Role" + "</mark></th>";
  body += "</tr>";
  // Data of Array, iterate through each row of compsci.classroom 
  for (var row in compsci.classroom) {
    // tr for each row, a new line
    body += "<tr>";
    // td for each column of data
    body += "<td>" + compsci.classroom[row].name + "</td>";
    body += "<td>" + compsci.classroom[row].ghID + "</td>";
    body += "<td>" + compsci.classroom[row].classOf + "</td>";
    body += "<td>" + compsci.classroom[row].role + "</td>";
    // tr to end line
    body += "<tr>";
  }

   // Build and HTML fragment of div, table, table body
  return (
    "<div style='" + style + "'>" +
      "<table>" +
        body +
      "</table>" +
    "</div>"
  );

};

// IJavaScript HTML processor receive parameter of defined HTML fragment
$$.html(compsci._toHtml());
```

# Timer
There are ways to setup a delay.

[Reference](http://n-riesco.github.io/ijavascript/doc/async.ipynb.html?ref=morioh.com&utm_source=morioh.com)


```javascript
$$.async();

console.log("Hello, World!");

var action = {
    $$: $$,
    console: console,
};

setTimeout(function() {
    $$.clear(0);    // clear output cell
    action.$$.sendResult("Goodbye!");
}, 2000);  // 2 second timer
```




    'Goodbye!'



## Hacks
> Objective of JavaScript is to produce frontend code.  Working in Jupyter Notebooks could help in the process of visualizing design with short and interactive feedback.  However, my hope is that you move to Fastpages and play with Frontend code in that environment and do the REAL thing.  Here is my suggestion.

> Design UI screens that are prototypes for your project.  Design at least one screen with data from a structure (like Person data above),  that is used to dynamically create HTML. As an alternative to HTML text method above, look at Jokes post and usage createElement...

<Runnable code={Expressions} lang={'java'} title={'Expressions.java'}/>

```javascript
const resultContainer = document.getElementById("result");
... build data table ....
for (const row of data) {
    // tr for each row
    const tr = document.createElement("tr");
    // td for each column
    const joke = document.createElement("td");
    const haha = document.createElement("td");
    const boohoo = document.createElement("td");
    // data is specific to the API
    joke.innerHTML = row.joke;
    haha.innerHTML = row.haha; 
    boohoo.innerHTML = row.boohoo; 
    // this build td's into tr
    tr.appendChild(joke);
    tr.appendChild(haha);
    tr.appendChild(boohoo);
    // add HTML to container
    resultContainer.appendChild(tr);
}
```

