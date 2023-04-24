import java.util.ArrayList;

class Hack2 {
    public static void main(String[] args) {
        ArrayList<Integer> randomNumbers = new ArrayList<Integer>();
        randomNumbers.add(1);
        randomNumbers.add(4);
        randomNumbers.add(7);
        randomNumbers.add(12);
        randomNumbers.add(23);
        System.out.println("ArrayList: " + randomNumbers);
        randomNumbers.remove(0);
        randomNumbers.addAll(4, randomNumbers);
        System.out.println("After adding: " + randomNumbers);
        randomNumbers.clear();
        System.out.println("After clearing: " + randomNumbers);
    }
}

public class Main {
    public static void main(String[] args) {
        Hack2.main(null);
    }
}
