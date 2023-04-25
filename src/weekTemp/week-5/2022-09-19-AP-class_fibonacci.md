# Class running Fibonacci
> The Fibonacci algorithm can be coded many ways.  This example shows Fibonacci implemented with the Streams interface.  The student has challenge to use Inheritance and Polymorphism to produce multiple algorithms, but minimize code changed in original Class.
- title: Class running Fibonacci
- toc: true
- badges: false
- image: /images/fibonacci.png
- permalink: /unit/5
- categories: [1.B, 2.D, 4.C, 5.A, C4.8, C4.9]
- type: ap
- week: 5


```java
/*
 * Creator: Nighthawk Coding Society
 * Mini Lab Name: Fibonacci sequence, featuring a Stream Algorithm
 * 
 */

import java.util.ArrayList;  
import java.util.HashMap;
import java.util.stream.Stream;

/* Objective will require changing to abstract class with one or more abstract methods below */
public class Fibo {
    String name;  // name or title of method
    int size;  // nth sequence
    int hashID;  // counter for hashIDs in hash map
    ArrayList<Long> list;   // captures current Fibonacci sequence
    HashMap<Integer, Object> hash;  // captures each sequence leading to final result

    /*
     Zero parameter constructor uses Telescoping technique to allow setting of the required value nth
     @param: none
     */
    public Fibo() {
        this(20); // telescope to avoid code duplication, using default as 20
    }

    /*
     Construct the nth fibonacci number
     @param: nth number, the value is constrained to 92 because of overflow in a long
     */
    public Fibo(int nth) {
        this.size = nth;
        this.list = new ArrayList<>();
        this.hashID = 0;
        this.hash = new HashMap<>();
        //initialize fibonacci and time mvc
        this.init();
    }

    /*
     This Method should be "abstract"
     Leave method as protected, as it is only authorized to extender of the class
     Make new class that extends and defines init()
     Inside references within this class would change from this to super
     Repeat process using for, while, recursion
     */
    protected void init() {
        this.name = "Stream";
        Stream.iterate(new long[]{0, 1}, f -> new long[]{f[1], f[0] + f[1]})
            .limit(this.size)
            .forEach(f -> this.setData(f[0]) );
    }

    /*
     Number is added to fibonacci sequence, current state of "list" is added to hash for hashID "num"
     */
    public void setData(long num) {
        list.add(num);
        hash.put(this.hashID++, list.clone());
    }

    /*
     Custom Getter to return last element in fibonacci sequence
     */
    public long getNth() {
        return list.get(this.size - 1);
    }

    /*
     Custom Getter to return last fibonacci sequence in HashMap
     */
    public Object getNthSeq(int i) {
        return hash.get(i);
    }

    /*
     Console/Terminal supported print method
     */
    public void print() {
        System.out.println("Init method = " + this.name);
        System.out.println("fibonacci Number " + this.size + " = " + this.getNth());
        System.out.println("fibonacci List = " + this.list);
        System.out.println("fibonacci Hashmap = " + this.hash);
        for (int i=0 ; i<this.size; i++ ) {
            System.out.println("fibonacci Sequence " + (i+1) + " = " + this.getNthSeq(i));
        }
    }

    /*
    Tester class method.  If this becomes abstract you will not be able to test it directly ...
    Change this method to  call "main" class of each of the extended classes
     */
    static public void main(String[] args) {
        Fibo fib = new Fibo();
        fib.print();
    }
}
Fibo.main(null);
```

    Init method = Stream
    fibonacci Number 20 = 4181
    fibonacci List = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
    fibonacci Hashmap = {0=[0], 1=[0, 1], 2=[0, 1, 1], 3=[0, 1, 1, 2], 4=[0, 1, 1, 2, 3], 5=[0, 1, 1, 2, 3, 5], 6=[0, 1, 1, 2, 3, 5, 8], 7=[0, 1, 1, 2, 3, 5, 8, 13], 8=[0, 1, 1, 2, 3, 5, 8, 13, 21], 9=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34], 10=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55], 11=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89], 12=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], 13=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233], 14=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377], 15=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 16=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 17=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597], 18=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584], 19=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]}
    fibonacci Sequence 1 = [0]
    fibonacci Sequence 2 = [0, 1]
    fibonacci Sequence 3 = [0, 1, 1]
    fibonacci Sequence 4 = [0, 1, 1, 2]
    fibonacci Sequence 5 = [0, 1, 1, 2, 3]
    fibonacci Sequence 6 = [0, 1, 1, 2, 3, 5]
    fibonacci Sequence 7 = [0, 1, 1, 2, 3, 5, 8]
    fibonacci Sequence 8 = [0, 1, 1, 2, 3, 5, 8, 13]
    fibonacci Sequence 9 = [0, 1, 1, 2, 3, 5, 8, 13, 21]
    fibonacci Sequence 10 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    fibonacci Sequence 11 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    fibonacci Sequence 12 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    fibonacci Sequence 13 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
    fibonacci Sequence 14 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
    fibonacci Sequence 15 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
    fibonacci Sequence 16 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
    fibonacci Sequence 17 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
    fibonacci Sequence 18 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]
    fibonacci Sequence 19 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584]
    fibonacci Sequence 20 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]


## Hacks
> Objective of Hacks is to produce the Fibonacci sequence in multiple ways.  See this [runtime](https://csa.nighthawkcodingsociety.com/mvc/fibonacci).  The method provided is Stream, the objective is to produce more familiar methods like ...

- For Loop

- While Loop

- Recursion

> The trick is to produce all these methods without reproducing the same lines of code.  Try to store and capture result data from parent class.  
- Read the comments of the code in this Blog, as the code instructs you on what to abstract.

> In Blog or code, comment on how this assignment fulfills the following standards from College Board.

- Skill 1.B: Determine code that would be used to complete code segments (ie For, While, Recursion)

- Skill 4.C: Determine if two or more code segments yield equivalent results (be sure to Discuss how you know results are the same)

- Skill 5.A: Describe the behavior of a given segment of program code (describe the difference in recursion versus for & while loops, perhaps add timing to determine speed)






