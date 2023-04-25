# Boolean Expressions and If Statements
> Focus on Ifs, Switch, Expressions and how to build control structures in Java.

- title: Boolean Expressions and If Statements
- toc: true
- categories: [1.B]
- image: /images/boolean.png
- permalink: /unit/3
- categories: [C4.6]
- type: ap
- week: 3

## Expression, Assignments, and Condition Statements
All of the Units have video series.  We have access to information and content for College Board and Code.org.  Below are two sample videos, it is up to you to determine the detail or brevity that you will need according to your experience.
- AP Classroom [Boolean Expressions](https://apclassroom.collegeboard.org/8/home?apd=5kbsvu3q3p&unit=3)
- Code.org [If and Conditions](https://www.youtube.com/watch?v=2rQmLwYVYpw), less than 2 minutes

### Introduction to Boolean expression
A Boolean expression is a logical statement that can be evaluated to True or False.  A Boolean expression may be composed of a combination of the Boolean constants true or false.


```java
// All of the boolean expressions below evaluate to true

if (true) {
    System.out.println("True code block");
}

if (true && !false) {
    System.out.println("True and Not False code block");
}

if (true || false) {
    System.out.println("True or False code block");
}

if ((true && !false) && (true || false)) {
    System.out.println("Confusing code block");
}

if (!((false || !true) || (false && true))) {
    System.out.println("De Morgan's law in my head of confusing code block");
}

// Can any of the above expression be simplified?  What would they simplify to?  Are any of these expressions useful?

```

    True code block
    True and Not False code block
    True or False code block
    Confusing code block
    De Morgan's law of confusing code block


 ## Hacks
Build your own Jupyter Notebook lesson on ifs
- Explain if, if-else, and if-elseif-else.
- Make a markdown block before you sample code
- Comment in code to describe each decision 

Add to lesson switch-case
1. Create and if-elseif-elseif-elsif-else statement, 5 or more conditions. 
2. Covert the 5 or more decisions to a switch-case-case-case-case-otherwise.
3. Make a markdown block before each code example
4. Comment/establish a style of comments for your if-elseif and switch-case code blocks

Finish lesson with De Morgan's law
1. Describe De Morgan's law
2. Illustrate De Morgan's law
3. Show some code running that shows understanding

Resources, it is really time to show you can find resources beyond the Teacher.   Code/Code/Coding is everywhere, find something that helps.
1. [Code.org](https://studio.code.org/s/csa4-2022?section_id=4160330) Unitt 4 section 1 to 5 can help with some ideas.
2. [AP Classroom unit 3](https://apclassroom.collegeboard.org/8/home?unit=3) has outline for unit
3. [CodeAcademy](https://www.codecademy.com/learn/learn-java/modules/learn-java-conditionals-control-flow-u) has some online resources
