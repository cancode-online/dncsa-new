public class Example {
    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    public static void main(String[] args) {
        Example ex = new Example();
        System.out.println(ex.factorial(5));      //returns 5 factorial
    }
}
