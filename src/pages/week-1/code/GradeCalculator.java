import java.util.ArrayList;
import java.util.Scanner;

class GradeCalculator {
    // introduction to Double wrapper class (object)
    ArrayList<Double> grades;   // similar to Python list

    // constructor, initializes ArrayList and call enterGrades method
    public GradeCalculator() {
        this.grades = new ArrayList<>();
        this.enterGrades();
    }

    // double requires test for zero versus threshold, DO NOT compare to Zero
    private boolean isZero(double value){
        double threshold = 0.001;
        return value >= -threshold && value <= threshold;
    }


    // enterGrades input method using scanner
    private void enterGrades() {
        Scanner input;

        while (true) {
            input = new Scanner(System.in);
            System.out.print("Enter a double, 0 to exit: ");
            try {
                double sampleInputDouble = input.nextDouble();
                System.out.println(sampleInputDouble);
                if (isZero(sampleInputDouble)) break;       // exit loop on isZero
                else this.grades.add(sampleInputDouble);    // adding to object, ArrayList grades
            } catch (Exception e) {  // if not a number
                System.out.println("Not an double (form like 9.99), " + e);
            }
            input.close();
        }
    }

    // average calculation 
    public double average() {
        double total = 0;   // running total
        for (double num : this.grades) {    // enhanced for loop
            total += num;   // shortcut add and assign operator
        }
        return (total / this.grades.size());  // double math, ArrayList grades object maintains its size
    }

    // static main method, used as driver and tester
    public static void main(String[] args) {
        GradeCalculator grades = new GradeCalculator(); // calls constructor, creates object, which calls enterGrades
        System.out.println("Average: " + String.format("%.2f", grades.average()));  // format used to standardize to two decimal points
    }
}

// Judge0 Activation (pretend it's not here)
class Main {
    public static void main(String[] args) {
        GradeCalculator.main(null);
    }
}