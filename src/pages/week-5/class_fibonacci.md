---
title: Class running Fibonacci
date: '2022-09-19'
summary: 'The Fibonacci algorithm can be coded many ways.  This example shows Fibonacci implemented with the Streams interface.  The student has challenge to use Inheritance and Polymorphism to produce multiple algorithms, but minimize code changed in original Class.'
tags: []
type: 'page'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import Fibo from './code/Fibo.java?raw';
</script>

<Runnable code={Fibo} lang={'java'} title={'Fibo.java'}/>

## Hacks

> Objective of Hacks is to produce the Fibonacci sequence in multiple ways. See this [runtime](https://csa.nighthawkcodingsociety.com/mvc/fibonacci). The method provided is Stream, the objective is to produce more familiar methods like ...

- For Loop

- While Loop

- Recursion

> The trick is to produce all these methods without reproducing the same lines of code. Try to store and capture result data from parent class.

- Read the comments of the code in this Blog, as the code instructs you on what to abstract.

> In Blog or code, comment on how this assignment fulfills the following standards from College Board.

- Skill 1.B: Determine code that would be used to complete code segments (ie For, While, Recursion)

- Skill 4.C: Determine if two or more code segments yield equivalent results (be sure to Discuss how you know results are the same)

- Skill 5.A: Describe the behavior of a given segment of program code (describe the difference in recursion versus for & while loops, perhaps add timing to determine speed)
