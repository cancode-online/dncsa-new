import java.util.ArrayList;

class Hack3 {
    public static void main(ArrayList<Integer> vals) {
        ArrayList<Integer> values = new ArrayList<Integer>();
        values.add(1);
        values.add(4);
        values.add(7);
        values.add(12);
        values.add(23);
        System.out.println("ArrayList: " + values);
        
        int total = 0;

        for (int i=0; i < values.size(); i++) { 
            total += values.get(i);
        }

        System.out.println("Total: " + total);
    }
}

public class Main {
    public static void main(String[] args) {

        ArrayList<Integer> vals = new ArrayList<Integer>();

        Hack3.main(vals);
    }
}