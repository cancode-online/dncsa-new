class PrimitiveDivision {
    public static void main(String[] args) {
        int i1 = 7, i2 = 2;
        System.out.println("Integer Division");
        System.out.println("\tint output with concatenation: " + i1 + "/" + i2 + " = " + i1/i2);
        System.out.println(String.format("\tint output with format: %d/%d = %d",i1, i2, i1/i2));
        System.out.printf("\tint output with printf: %d/%d = %d\n",i1, i2, i1/i2);

        double d1 = 7, d2 = 2;
        System.out.println("Double Division");
        System.out.println("\tdouble output with concatenation: " + d1 + "/" + d2 + " = " + d1/d2);
        System.out.println(String.format("\tdouble output with format: %.2f/%.2f = %.2f",d1, d2, d1/d2));
        System.out.printf("\tdouble output with printf: %.2f/%.2f = %.2f\n",d1, d2, d1/d2);

        System.out.println("Casting and Remainders");
        System.out.printf("\tint cast to double on division: %d/%d = %.2f\n",i1, i2, i1/(double)i2);
        System.out.println("\tint using modulo for remainder: " + i1 + "/" + i2 + " = " + i1/i2 + " remainder " + i1%i2);
    }
}

// Judge0 Activation (pretend it's not here)
class Main {
    public static void main(String[] args) {
        PrimitiveDivision.main(null);
    }
}