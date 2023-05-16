---
title: Iteration with 2D Array
date: '2022-09-12'
summary: 'Focus is on iteration.  This example uses 2D array with simple ASCII art.  The idea of this example was to incorporate ASCII art with a nursery rhyme.'
tags: []
type: 'page'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import Monkey from './code/Monkey.java?raw';
</script>

<Runnable code={Monkey} lang={'java'} title={'Monkey.java'}/>

## Hacks (Mini-lab)
> Build you own Jupyter Notebook.  Feel free to use any ASCII art of your choice, there are some much better ones [here](https://www.asciiart.eu/animals/monkeys).  My little guys were made up out of my head while looking at unicode characters.

- Print monkeys horizontally versus vertically.
- Build more or entire rhyme for the "Monkey Jumpers" countdown poem
- Add names or other properties to the monkeys
 
> In you notebook, illustrate or answer some of these questions.
- Is this program in more of an Imperative Programming Style or OOP style? Explain.
    - Observe variable assignments.
    - Is each Monkey an object?
    - Build an where the monkey is an object versus two-dimensional array.  This would be leading into Unit 5 requirements.
- Study loops and zero based counting
    - Study two-dimensional (2D) array references
    - Explain different way you can access a 2D array
