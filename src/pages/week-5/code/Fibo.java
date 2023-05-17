/*
* Creator: Nighthawk Coding Society
* Mini Lab Name: Fibonacci sequence, featuring a Stream Algorithm
* 
*/

import java.util.ArrayList;  
import java.util.HashMap;
import java.util.stream.Stream;

/* Objective will require changing to abstract class with one or more abstract methods below */
class Fibo {
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

// Judge0 Activation (pretend it's not here)
class Main {
    public static void main(String[] args) {
        Fibo.main(null);
    }
}
