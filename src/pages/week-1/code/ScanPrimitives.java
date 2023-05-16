// java style to import library
import java.util.Scanner;

// class must alway have 1st letter as uppercase, CamelCase is Java Class convention
class ScanPrimitives {
    public static void main(String[] args) {    
        Scanner input;

        // primitive int
        input = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        try {
            int sampleInputInt = input.nextInt();
            System.out.println(sampleInputInt);
        } catch (Exception e) {  // if not an integer
            System.out.println("Not an integer (form like 159), " + e);
        }
        input.close();

        // primitive double
        input = new Scanner(System.in);
        System.out.print("Enter a double: ");
        try {
            double sampleInputDouble = input.nextDouble();
            System.out.println(sampleInputDouble);
        } catch (Exception e) {  // if not a number
            System.out.println("Not an double (form like 9.99), " + e);
        }
        input.close();

        // primitive boolean
        input =  new Scanner(System.in);
        System.out.print("Enter a boolean: ");
        try {
            boolean sampleInputBoolean = input.nextBoolean();
            System.out.println(sampleInputBoolean);
        } catch (Exception e) {  // if not true or false
            System.out.println("Not an boolean (true or false), " + e);
        }
        input.close();

        // wrapper class String
        input =  new Scanner(System.in);
        System.out.print("Enter a String: ");
        try {
            String sampleInputString = input.nextLine();
            System.out.println(sampleInputString);
        } catch (Exception e) { // this may never happen
            System.out.println("Not an String, " + e);
        }
        input.close();
    }
}

// Judge0 Activation (pretend it's not here)
class Main {
    public static void main(String[] args) {
        ScanPrimitives.main(null);
    }
}