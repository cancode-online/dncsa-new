import java.util.ArrayList;

class Turtle {
    int size;
    int weight;
    
    public Turtle(int size, int weight) {
        this.size = size;
        this.weight = weight;
    }
    
    public String toString() {
        return ("Weight: " + weight + "\nSize: " + size);
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Boolean> boolList = new ArrayList<Boolean>();
        ArrayList<Turtle> turtleList = new ArrayList<Turtle>();
        ArrayList<String> stringList = new ArrayList<String>();
        
        boolList.add(true);
        boolList.add(true);
        boolList.add(false);
        
        turtleList.add(new Turtle(30, 60));
        turtleList.add(new Turtle(40, 20));
        
        stringList.add("String 1");
        stringList.add("String 2");
        stringList.add("String 3");
        stringList.add("String 4");
        stringList.add("String 5");
        stringList.add("String 6");
        stringList.add("String 7");
        stringList.add("String 8");
        stringList.add("String 9");
        stringList.add("String 10");
        
        System.out.println(boolList);
        System.out.println(stringList);
        System.out.println(turtleList);
    }
}





