---
title: Unit 10
date: '2023-04-21'
summary: 'Lesson on topics covered in AP CSA Unit 10 (Recursion)'
tags: ['lesson', 'Unit 10']
type: 'page'
---

<script>
	import Runnable from '$components/Runnable.svelte';
	import examplecode from './code/examplecode.java?raw';
    import binarySearch from './code/binarySearch.java?raw';
</script>

## Lesson Overview

> Lesson on topics covered in AP CSA Unit 10 (Recursion).
> AP Exam Weighting 5-7.5%

### What is Recursion

Recursion is a process where a function calls itself repeatedly until a certain condition is done. It's like a loop where each iteration calls the function again instead of using a traditional loop construct.

<summary>Code Example</summary>
<Runnable code={examplecode} lang={'java'} title={'recursion.java'}/>

## Using Recursion for sorting and searching

### Binary Search

Binary search is a search algorithm used to find the position of a target value within a sorted array or list. It works by repeatedly dividing the search interval in half until the target value is found or it is determined that the target value is not in the array.

<Runnable code={binarySearch} lang={'java'} title={'binarysearch.java'}/>

### Merge Sort

Merge sort is a sorting algorithm that follows the divide-and-conquer approach to sort a list or an array. It divides the list into smaller sub-lists, sorts them recursively, and then merges the sorted sub-lists to produce the final sorted list.

```java
     void mergeSort(int[] array, int low, int high) {
		//Create a temporary integer array that is the same length as the passed in array.
		int[] tempArray = new int[array.length];
		//make an if statement that checks if low is less than high and put the rest of the method inside of it
		if (low < high) {
			// Create an integer called middle and set it equal to the half way point between low and high
			int middle = (high + low) / 2;
			//  call the mergeSort method with low and middle
			mergeSort(array, low, middle, display);
			// call the mergeSort method with middle + 1 and high
			mergeSort(array, (middle + 1), high, display);
			// copy the elements from the array into the temporary array, but only the elements from low to high inclusive
			for (int i = low; i < high+1; i++) {
				tempArray[i] = array[i];
			}
			// create three integers called i, j, and k and	set them equal to low, middle + 1, and low respectively
			int i = low;
			int j = middle + 1;
			int k = low;
			// while i is less than or equal to middle and j is less than or equal to high
			while ((i <= middle) && (j <= high)) {
				// if temp array at i is less than or equal	to temp array at j
				if (tempArray[i] <= tempArray[j]) {
					// set array at k equal to temp array at i
					array[k] = tempArray[i];
					// increase i by 1
					i += 1;
					// else (ends after step 15)
				} else {
					// set array at k equal to temp array at j
					array[k] = tempArray[j];
					// increase j by 1
					j += 1;
				}

				// increase k by 1
				k += 1;
			}
			// make a while loop that runs while i is less than or equal to middle
			while (i <= middle) {
				// set array at k equal to temp array at i
				array[k] = tempArray[i];
				// increase k and i by 1
				k += 1;
				i += 1;
			}
		}
	}

```

## Hacks

> Create your own recursive algorithm of any type. Options include

1. Fibonacci, or factorial, although this is pretty basic
2. A more advanced version of this would be to create your own searching or sorting algorithm that utilizes recursive
