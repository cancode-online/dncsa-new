---
title: Primitive Data Types
date: '2022-08-22'
summary: 'An introduction to primitive types using input, output, and finishing with a grading calculator.'
tags: []
type: 'page'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import DefinePrimitives from './code/DefinePrimitives.java?raw';
    import ScanPrimitives from './code/ScanPrimitives.java?raw';
    import PrimitiveDivision from './code/PrimitiveDivision.java?raw';
    import GradeCalculator from './code/GradeCalculator.java?raw';
</script>

## College Board Summary

College Board focus is on primitive types of int, double, and boolean. In unit1, String is mentioned, but it is technically a Wrapper Class. The primitive type that is building block for a String is a single character called char. String is an array of char's and the uppercase S in String means it is a Class.

### Data Types

Now is a good time to understand data types. There are primitive types in Java, but you should know there are [Wrapper Classes](https://www.youtube.com/watch?v=kog78g2fvqU). Java likes everything to be a class. String is a Non-Primitive data type that is a Class in Java.

![img](https://nighthawkcoders.github.io/APCSA/images/copied_from_nb/images/data_types.png)

<Runnable code={DefinePrimitives} lang={'java'} title={'DefinePrimitives.java'}/>

### Input Primitive data

Input is a key concept to all programming. The assignments in previous example are "static" or "hard coded". The examples when you use input are supplied by the user.

Scanner is the java utility class for console input.

<Runnable code={ScanPrimitives} lang={'java'} title={'ScanPrimitives.java'}/>

### Output Primitive Data

The second key to to all programming is Output. All programming has means to format and combine data. In these examples you see descriptions of the mathematical operation combine with the result of the operation.

<Runnable code={PrimitiveDivision} lang={'java'} title={'PrimitiveDivision.java'}/>

### Grade Calculator, putting Input and Output together

Primitive types rarely stand alone. This lab uses the primitive type double, but it also introduces the wrapper class Double. Also included is one of the most common Data Structures in Java, the ArrayList. These items are put together to create a grade calculator.

<Runnable code={GradeCalculator} lang={'java'} title={'GradeCalculator.java'}/>

## Hacks

Build your own Jupyter Notebook meeting these College Board and CTE competencies

- Define in a Class the following data types
  - Demonstrate use of Primitives: int, double, boolean, string
  - Demonstrate use of Wrapper Class object: String
- Describe in comments how each data type choice is appropriate to application
- Perform arithmetic expressions and assignment in a program code [Code.org Lesson](https://studio.code.org/s/csa2-2022/lessons/2/student)
- Determine what is result is in a variable as a result of an data type and expression (ie integer vs double)
- Perform an arithmetic expressions that uses casting, add comments that show how it produces desired result. Learn more by watching this [College Board video](https://apclassroom.collegeboard.org/8/home?apd=ovg96bpudo&unit=1)
- Perform compound assignment operator (ie +=), add comments to describe the result of operator

Additional requirements

1. Multiple inputs and outputs are required
2. Jupyter NoteBook when committed to Fastpages must display Outputs
3. Building something that helps you study for another class is encouraged, here are some ideas: MPG, GPA, Celsius to Fahrenheit, The nth Fibonacci, GCD, Primes in range of numbers, Points per Game
